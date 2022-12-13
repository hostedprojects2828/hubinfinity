import React from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../assets/image/logo.png';

import './root.css';

function Root() {
  return (
    <>
      <div className='bg'>
        <div className='logo'>
          <img src={Logo} alt='none' />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
