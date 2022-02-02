import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.png'
import { signOut } from 'next-auth/react'
import { Wrapper } from './Nav.styles';
const Nav = ({name,image}) => {
  return (
      <Wrapper>
          <div className='logo-gp'>
              <Image src={logo} alt='logo' width={100} height={100}/>
              <h2>Todo <br/> Next-Auth</h2>
          </div>
          <div className='user-gp'>
              <div className='img-wrapper'>
                <img src={image||'https://previews.123rf.com/images/vitechek/vitechek1907/vitechek190700199/126786791-user-login-or-authenticate-icon-human-person-symbol-vector.jpg'} alt='user'/>  
              </div>
              <p className='user-name'>{name|| 'Guest'}</p>
              <button onClick={()=>signOut()} className='logOut-btn'>Log out</button>
          </div>
      </Wrapper>
  );
};

export default Nav;
