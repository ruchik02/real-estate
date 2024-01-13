// import image from '../../assets/logo.png'
import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened: boolean) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "-100%" : undefined };
    }
    return {}; // Return default empty styles if condition is not met
  };
  return (
    <section className="h-wrappper">
      <div className="flexCenter paddings innerWidth h-container">
        <a href="">EverGreen Estates</a>
        {/* <img src={image} alt="logo image" width={100} /> */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#residencies">Residencies</a>
            <a href="#companies">Best Companies</a>
            <a href="#value">Our Value</a>
            <a href="#started">Get Started</a>
            {/* <a href="">Contact Us</a> */}
            <button className="button">
              <a href="#contact">Contact Us</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
