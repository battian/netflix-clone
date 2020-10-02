import React, { useEffect, useState } from 'react';

import logoImg from '../../images/Netflix_logo.svg';
import avatarImg from '../../images/Netflix_avatar.png';

import './styles.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <header className={`navbar ${show && 'nav_black'}`}>
      <img className="nav_logo" src={logoImg} alt="Netflix Logo" />
      <img className="nav_avatar" src={avatarImg} alt="Netflix Logo" />
    </header>
  );
};

export default Navbar;
