import React, { useEffect } from 'react'
import { getCsrfToken, getProviders, useSession } from 'next-auth/react'
import { getSession } from "next-auth/react"
import {Wrapper} from '../styles/login.styles'
import { useRouter } from 'next/router'
import OAuth from '../components/auth/OAuth'
import Email from '../components/auth/Email'
import Credentials from '../components/auth/Credentials'
import { toast } from 'react-toastify'

function Login({providers,session,csrfToken}) {
    const router = useRouter()
    useEffect(()=>{
        if (session) return router.push('/')
    },[session])
    
    useEffect(()=>{
        if(router.query.error){
            
            toast.error(router.query.error)

            return router.push('/login')

        }
    },[])
    const themeColor = {
        googleTheme: {
            dark : '#f2573f',
            light: '#f65314'
        },
        facebookTheme: {
            dark : '#0404be',
            light: '#29487d'
        },
        githubTheme: {
            dark : '#444',
            light: '#333333'
        },
        emailTheme:{
            dark:'#29e642',
            light:'#3af27e',
        },
        credentialsTheme:{
            dark:'#594f4f',
            light:'#7a6868',
        },
    }
    if (session) return null
    return (
        <div>
            <Wrapper>
                
                    <h1 className='title'>Todo Next-Auth</h1>
                    <p className='login'>Login with NextAuth</p>
                    
                    <Credentials providers={providers} themeColor={themeColor} csrfToken={csrfToken}/>
                    
                    <div style={{color: '#fff'}}>✦ Or ✦</div>
                    <OAuth providers={providers} themeColor={themeColor} csrfToken={csrfToken}/>
                    <Email providers={providers} themeColor={themeColor} csrfToken={csrfToken}/>
            
                    
            </Wrapper>
        </div>
    )
}

export async function getServerSideProps (context){

    const session = await getSession(context)
    console.log({session})
    return {
      props:{
        providers: await getProviders(),
        session,
        csrfToken: await getCsrfToken(context)
      }
    }
  }

export default Login

