import AboutBlock from "../aboutBlock/AboutBlock";
import coffeeImg from "../../resources/coffee-about.png";
import "./coffeeItem.scss";

const CoffeeItem = (props) => {

  const {country, description, price} = props;

  return (
    <>
      <AboutBlock
        img={coffeeImg}
        alt="aromistico coffee"
        title="About it"
        classes="about-info--single"
        html={
          <>
            <p className="coffee__about-text">
              <span>Country:</span> {country}
            </p>
            <p className="coffee__about-text">
              <span>Description: </span> {description}
            </p>
            <p className="coffee__about-text coffee__about-text--price">
                <span>Price:</span> {price}
            </p>
          </>
        }
      />
    </>
  );
};

export default CoffeeItem;