import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div className="start-wrapper">
      <div className="paddings innerWidth start-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">
            Get Started with EverGreen Estates
          </span>
          <span className="secondaryText">
            {" "}
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon.
          </span>
          <button className="button">
            <a href="mailto:sruchika004@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
