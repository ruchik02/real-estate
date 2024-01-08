import "./Cards.css";
import FeatureCard from "./FeatureCard";
const Cards = () => {
  return (
    <section className="cards-wrapper">
      <div className="paddings innerWidth cards-container">
        <h1 className="headingText">Featured Property Types</h1>
        <span className="secondaryText">Find All Type of Property</span>
      </div>
      <FeatureCard />
    </section>
  );
};

export default Cards;
