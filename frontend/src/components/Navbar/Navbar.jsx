import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import image from "../../constants/images";
import "./Navbar.css";
// RainbowKit
import { useAccount } from "wagmi";
import useWalletVerification from "../../Utils/UserWalletVerification";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// SubMenu
const SubMenu = ({ action, subMenu_link, subMenu_text }) => (
  <>
    <p onClick={action}>
      <Link to={subMenu_link}>{subMenu_text}</Link>
    </p>
  </>
);
const Navbar = () => {
  // Check wallet number
  const account = useAccount();
  const { openConnectModal } = useConnectModal();
  const { verifyWalletInDatabase } = useWalletVerification();

  useEffect(() => {
    if (account.isConnected) {
      console.log(account.address);
      verifyWalletInDatabase(account.address);
    }
  }, [account, verifyWalletInDatabase]);

  // NAVBAR menu options
  const Menu = () => (
    <>
      {/* HOME */}
      <p onClick={closeMenu}>
        <Link to="/">Home</Link>
      </p>
      {/* HOW IT WORKS */}
      <div className="display__SubMenu">
        <p onClick={closeMenu}>
          <Link to="/public-works">How it Works</Link>
        </p>
        <div className="subMenu__hide">
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Buying Tokens`}
              action={closeMenu}
            />
          </div>
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Tracking Progress`}
              action={closeMenu}
            />
          </div>
        </div>
      </div>
      {/* PUBLIC WORKS */}
      <div className="display__SubMenu">
        <p onClick={closeMenu}>
          <Link to="/public-works">Public Works</Link>
        </p>
        <div className="subMenu__hide">
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Health`}
              action={closeMenu}
            />
          </div>
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Education`}
              action={closeMenu}
            />
          </div>
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Sport`}
              action={closeMenu}
            />
          </div>
        </div>
      </div>
      {/* TOOLS */}
      <div className="display__SubMenu">
        <p onClick={closeMenu}>
          <Link to="/public-works">Tools</Link>
        </p>
        <div className="subMenu__hide">
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Creating Smart Contracts`}
              action={closeMenu}
            />
          </div>
          <div className="subMenu__hide-item">
            <SubMenu
              subMenu_link={`/incentives`}
              subMenu_text={`Verifying Transactions`}
              action={closeMenu}
            />
          </div>
        </div>
      </div>
      {/* TRANSPARENCY */}
      <p onClick={closeMenu}>
        <Link to="/transparency">Transparency</Link>
      </p>
      {/* INCENTIVES */}
      <p onClick={closeMenu}>
        <Link to="/incentives">Incentives</Link>
      </p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  // Close Burger menu on click
  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="webapp__navbar">
      <div className="webapp__navbar-links">
        <div className="webapp__navbar-links-logo">
          <img src={image.logoAlianza} alt="logo" />
        </div>
        <ConnectButton />
        <div className="webapp__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="webapp__navbar-sign">
        <p>
          <Link to="/login">Login</Link>
        </p>
        <button type="button">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
      <div className="webapp__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="webapp__navbar-menu_container scale-up-center">
            <div className="webapp__navbar-menu_container-links">
              <Menu />
              <div className="webapp__navbar-menu_container-links-sign">
                <p>
                  <Link to="/login">Login</Link>
                </p>
                <button type="button">
                  <Link to="/signup">Sign up</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
