import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import TodoInput from '../components/TodoInput'

import { useEffect,useState  } from 'react'
import TodoItem from '../components/TodoItem'
import axios from 'axios'
import {  toast } from 'react-toastify';

export default function Home() {
  const { data: session } = useSession()
  const [todos,setTodos]=useState([])
  const [loading,setLoading] = useState(false)
  const [fetchedSession,setFetchedSession] = useState(0)

  useEffect(()=>{
  
      if(session){
        const fetchTodos = async()=>{
          setLoading(true)
          await axios.get('./api/todos')
          .then(res=>{
            setTodos(res.data)
            setLoading(false)
          })
          .catch(err=>{
            toast.error(err.response.data.msg)
          })
          
        }
        fetchTodos()
      }
    
  },[fetchedSession])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <Nav name={session.user.name} image={session.user.image}/>
          <TodoInput  isFetchedSession={setFetchedSession} FetchedSession={fetchedSession}/>
          {
            todos.map(todo=>{
              return (
                <TodoItem todo={todo.name} key={todo._id}/>
              )
            })
          }
          {
            loading && <h3>Loading...</h3>
          }
      </div>
      
    </div>
  )
}

export async function getServerSideProps({req,res}) {
  const session = await getSession({req})
 
  if(!session) {
    return {
    
        redirect: {
          destination: '/login',
          permanent: false,
        },
      
    }
  }
  return {
    props : {
      session 
    }
  }
}