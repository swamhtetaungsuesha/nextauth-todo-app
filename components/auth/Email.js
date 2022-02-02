
import { useState } from 'react';
import LoginBtn from './LoginBtn';

const Email = ({ providers, themeColor, csrfToken }) => {
    const [email , setEmail] = useState('')
    return (
        <>
            <LoginBtn
                provider={providers.email}
                themeColor={themeColor.emailTheme}
                csrfToken={csrfToken}
                options={{ email }}
            >
                <div>
                    <label htmlFor='Email address' ></label>
                    <input type='text' id='email' name='email'
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
                            marginTop: '20px'

                        }}
                    />
                </div>
            </LoginBtn>
        </>
    );
};

export default Email;
