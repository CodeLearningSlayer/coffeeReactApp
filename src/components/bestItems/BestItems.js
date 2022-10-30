import first from "../../resources/best/1.png";
import second from "../../resources/best/2.png";
import third from "../../resources/best/3.png";
import "./bestItems.scss";

function renderItems(images, names, prices) {
    const elements = images.map((image, i) => {
        return (
            <a href="#" key={i} className="best__products-item item">
                <div className="item__img-box">
                    <img src={image} alt="coffee-item" className="item__img"/>
                </div>
                <p className="item__name">{names[i]}</p>
                <p className="item__price">{prices[i]}</p>
            </a>
        )
    });
    return elements;
}

const BestItems = () => {

    const names = ['Solimo Coffee Beans 2 kg', 'Presto Coffee Beans 1 kg', 'AROMISTICO Coffee 1 kg'];
    const prices = ['10.73$', '15.99$', '6.99$'];
    const images = [first, second, third];

    const items = renderItems(images, names, prices);

    return (
        <>
            <div className="container">
                <h2 className="best__title title">Our best</h2>
                <ul className="best__products">
                   {items}
                </ul>
            </div>
        </>
    )
}

export default BestItems;