import "./Cards.css";
import { featured } from "../../utils/data";
const FeatureCard = () => {
  return (
    <div className="content grid5 paddingsFeatureCards">
      {featured.map((items, index) => (
        <div className="box" key={index}>
          <img className="feature-image" src={items.cover} alt="" />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
