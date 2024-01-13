import "./Companies.css";
import image1 from "../../assets/equinix.png";
import image2 from "../../assets/dlf.png";
import image3 from "../../assets/goorej.png";
import image4 from "../../assets/realty.png";
import image5 from "../../assets/tower.png";
import image6 from "../../assets/prologis.png";

const Companies = () => {
  return (
    <section id="companies" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={image1} alt="image 1" />
        <img src={image2} alt="image 2" />
        <img src={image3} alt="image 3" />
        <img src={image4} alt="image 4" />
        <img src={image5} alt="image 5" />
        <img src={image6} alt="image 6" />
      </div>
    </section>
  );
};

export default Companies;
