import Connectdb from "../../../config/connectdb";
import Todos from '../../../models/todoModel'
import mongoose from 'mongoose'
import {getSession} from 'next-auth/react'
import {getToken} from 'next-auth/jwt'
Connectdb();

export default async function handler(req,res){
    switch(req.method){
        case 'POST':
            await createTodo(req,res)
        break;
        case 'GET':
            await getTodos(req,res)
    }
}

const createTodo = async(req,res)=> {
    try{
        
        const session =await getSession({req})
      
        if(!session){
            return res.status(400).json({msg: 'Unauthentication error!'})
        }
        const {userId} = session
        const {todo} = req.body
        if(!todo) {
            return res.status(400).json({msg: "Please add todo."})
        }
        const newTodo= new Todos({
            name: todo,
            user : userId
        })
        await newTodo.save().then((res)=>console.log(res))

        return res.status(201).json({msg: `Successfully created ${todo}`})
        
    }catch(err){
        
            return res.status(500).json({msg:err.message})
        
           
    }
}
const getTodos = async(req,res)=> {
    try{

        const secret = process.env.SECRET
        const token = await getToken({req,secret})
        console.log(token.sub)

        const session =await getSession({req})
        console.log(session)
        
        if(!session&&!token){
            return res.status(400).json({msg: 'Unauthentication error!'})
        }

        const todos=await Todos.find({user: session.userId||token.sub})
        res.status(200).json(todos)
    }catch(err){
        
            return res.status(500).json({msg:err.message})
        
           
    }
}
