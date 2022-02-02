import React from 'react';
import { useState } from 'react';
import LoginBtn from './LoginBtn';

const Email = ({ providers, themeColor, csrfToken }) => {
    const [email , setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <>
            <LoginBtn
                provider={providers.credentials}
                themeColor={themeColor.credentialsTheme}
                csrfToken={csrfToken}
                options={{redirect: false, email,password }}
            >
                <div style={{color:'#fff',textAlign:'left',MaxWidth: '100%'}}>
                    <label htmlFor='Email ' >Email address</label>
                    <input type='email' 
                        placeholder='email@example.com' required
                        value={email} onChange={e => setEmail(e.target.value)}
                        style={{
                            minWidth: '100%',
                            minHeight: '40px',
                            borderRadius: '5px',
                            padding: '10px',
                            border: '1px solid #666666',
                            boxShadow: '0px 0px 2px black',
                            outline: 'none',
                            

                        }}
                    />
                </div>
                <div style={{color:'#fff',textAlign:'left',MaxWidth: '100%'}}>
                    <label htmlFor='Password' >Password</label>
                    <input type='password' id='password' name='password' required
                        placeholder='Password'
                        value={password} onChange={e => setPassword(e.target.value)}
                        style={{
                            minWidth: '100%',
                            minHeight: '40px',
                            borderRadius: '5px',
                            padding: '10px',
                            border: '1px solid #666666',
                            boxShadow: '0px 0px 2px black',
                            outline: 'none',
                            marginBottom: '20px'

                        }}
                    />
                </div>
            </LoginBtn>
        </>
    );
};

export default Email;