import { SessionProvider } from 'next-auth/react'
import App from 'next/app'
import '../styles/globals.css'
import { getProviders } from 'next-auth/react'
import { getSession } from "next-auth/react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({
  Component,
  pageProps,
}) {
  return (
    <SessionProvider session={pageProps?.session}>
        <Component {...pageProps}/>
        <ToastContainer/>
    </SessionProvider>
  )
}

// MyApp.getInitialProps=async (context) =>{
//   return {
//     providers: await getProviders(),
//     session: await getSession(context)
//   }
// }

// export async function getServerSideProps(ctx) {
//   return {
//     props: {
//       session: await getSession(ctx)
//     }
//   }
// }
export default MyApp
