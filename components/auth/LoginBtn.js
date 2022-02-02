import React from 'react'
import {signIn} from 'next-auth/react'
import {BtnWrapper} from './LoginBtn.styles'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
function LoginBtn({provider,themeColor,csrfToken,children,options}) {
    const router = useRouter()
    const submitHandler=async(e)=>{
        e.preventDefault();
        const res=await signIn(provider.id,options)
        if(provider.id==='credentials'){
            
            if(res.error){
                if(res.error==='Success! Check your email!'){
                    await toast.success(res.error)
                    signIn('email',{email:options.email})
                    return 
                    
                }
               return toast.error(res.error)
            }
            return router.push('/')
        }
        
    }

    return (
        <BtnWrapper onSubmit={submitHandler}>
            <input type='hidden' name='csrfToken' defaultValue={csrfToken}/>
            {children}
           <button type='submit' className='login-btn' style={{background: `linear-gradient(20deg,${themeColor.light},${themeColor.dark})`}}>Sign in with {provider.name}</button> 
        </BtnWrapper>
    )
}

export default LoginBtn
