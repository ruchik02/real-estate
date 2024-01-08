import image from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        {/* left side */}
        <div className="flexColstart footer-left">
          <img src={image} alt="logo image" width={80} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        {/* center */}
        <div className="flexColStart footer-center">
          <span>© Ruchika . All right reserved</span>
        </div>
        {/* right side */}
        <div className="flexColStart footer-right">
          <span className="orangeBoldText">Information</span>
          <span className="secondaryText">14 Lorem ipsum dolor sit amet.</span>
          <div className="flexCenter footer-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
