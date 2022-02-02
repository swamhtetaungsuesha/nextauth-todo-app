import React from 'react';
// import { useState } from 'react/cjs/react.development';
import LoginBtn from './LoginBtn';
const OAuth = ({ providers, themeColor, csrfToken }) => {
  // const [email , setEmail] = useState('')
  return (
    <div>

      <LoginBtn
        provider={providers.google}
        themeColor={themeColor.googleTheme}
        csrfToken={csrfToken} 
      />

      <LoginBtn
       provider={providers.facebook}
       themeColor={themeColor.facebookTheme}
       csrfToken={csrfToken}
      />

      <LoginBtn
       provider={providers.github}
       themeColor={themeColor.githubTheme}
       csrfToken={csrfToken}
      />

      {/* <LoginBtn
       provider={providers.email}
       themeColor={themeColor.emailTheme}
       csrfToken={csrfToken}
       options={{email}}
      >
        <div>
          <label htmlFor='Email address' ></label>
          <input type='text' id='email' name='email'
          placeholder='email@example.com' required
          value={email} onChange={e=>setEmail(e.target.value)}
          style={{
            minWidth:'100%',
            minHeight:'40px',
            borderRadius:'5px',
            padding: '10px',
            border: '1px solid #666666',
            boxShadow : '0px 0px 2px black',
            outline:'none',
            marginTop: '20px'
            
          }}
          />
        </div>
      </LoginBtn> */}

    </div>
  );
};

export default OAuth;
