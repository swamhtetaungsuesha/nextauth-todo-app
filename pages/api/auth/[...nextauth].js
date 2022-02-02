import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import nodemailer from "nodemailer"
import { html,text } from "../../../utils/emailHtml";
import CredentialsProvider from "next-auth/providers/credentials";
import Connectdb from "../../../config/connectdb";
import Users from '../../../models/userModel'
import bcrypt  from 'bcryptjs'

Connectdb();
export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        console.log(credentials)

        const email = credentials.email
        const password = credentials.password

        const user = await Users.findOne({email})

        if(user) return loginUser({user,password})
        return regisisterUser({email,password})
      }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async({
        identifier: email,
        url,
        provider: { server, from },
      })=> {
        const { host } = new URL(url)
        const transport = nodemailer.createTransport(server)
        await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: text({ url, host }),
          html: html({ url, host, email }),
        })
      }
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: "jwt",

    maxAge: 30 * 24 * 60 * 60, // 30 days
  
    updateAge:60, // 24 hou
  },
  jwt: {
    secret : process.env.SECRET
  },
  callbacks: {
    async session({session, user,token }) {
     
      session.userId = token.sub
      return Promise.resolve(session)
    }
  }
})

const loginUser=async({user,password})=>{
  if(!user.password) {
    throw new Error ('Account have to login with OAuth or Email!')
  }
  const isMatch = await bcrypt.compare(password,user.password)

  if(!isMatch){
    throw new Error ('Incorrect Password!')
  }

  if(!user.emailVerified){
    throw new Error ('Success! Check your email!')
  }

  return user
}

const regisisterUser=async({email,password})=>{

  const hashPassword = await bcrypt.hash(password,12)
  const newUser = new Users({
    email,
    password: hashPassword,

  })

  await newUser.save()

  throw new Error('Success! Check your email!')
}