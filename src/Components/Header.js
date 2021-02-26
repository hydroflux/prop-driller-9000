import React from 'react';
import logo from '../assets/Step_1.png'

function Header(props) {

  return (
    <header onClick={props.handle}>
      <img
        src = {logo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
