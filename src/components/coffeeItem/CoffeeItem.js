import AboutBlock from "../aboutBlock/AboutBlock";
import coffeeImg from "../../resources/coffee-about.png";
import "./coffeeItem.scss";


const CoffeeItem = () => {
  return (
    <>
      <AboutBlock
        img={coffeeImg}
        alt="aromistico coffee"
        title="About it"
        classes="about-info--single"
        html={
          <>
            <p class="coffee__about-text">
              <span>Country:</span> Brasil
            </p>
            <p class="coffee__about-text">
              <span>Description: </span>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p class="coffee__about-text coffee__about-text--price">
                <span>Price:</span> 16.99$
            </p>
          </>
        }
      />
    </>
  );
};

export default CoffeeItem;