import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';  
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import image from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  // NAVBAR menu options
  const Menu = () => (
    <>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/how-it-works">How it Works</Link></p>
      <p><Link to="/public-works">Public Works</Link></p>
      <p><Link to="/tools">Tools</Link></p>
      <p><Link to="/transparency">Transparency</Link></p>
      <p><Link to="/incentives">Incentives</Link></p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='webapp__navbar'>
      <div className='webapp__navbar-links'>
        <div className='webapp__navbar-links-logo'>
          <img src={image.logoAlianza} alt='logo'/>
        </div>
        <div className='webapp__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='webapp__navbar-sign'>
        <p><Link to="/login">Login</Link></p>
        <button type='button'><Link to="/signup">Sign up</Link></button>
      </div>
      <div className='webapp__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='webapp__navbar-menu_container scale-up-center'>
            <div className='webapp__navbar-menu_container-links'>
              <Menu />
              <div className='webapp__navbar-menu_container-links-sign'>
                <p><Link to="/login">Login</Link></p>
                <button type='button'><Link to="/signup">Sign up</Link></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
