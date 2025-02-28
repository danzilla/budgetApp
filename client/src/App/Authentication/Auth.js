import Login from './Login/Login';
import Register from './Register/Register';

import { useState } from "react";


const Auth = () => {

  const [pages, setPages] = useState({ login: true, register: false})

  const activeLogin = () => { setPages({ login: true, register: false }) }
  const activeRegister = () => { setPages({ login: false, register: true }) }

  let displayPage;
  if (pages.login === true) {
    displayPage = <Login activeRegister={activeRegister} />
  } else if (pages.register === true) {
    displayPage = <Register activeLogin={activeLogin} />
  }

  return (<>{displayPage}</>);
}

// Export
export default Auth;