import { useContext } from "react";
import { Link } from "react-router-dom";
import first from "../../resources/best/1.png";
import second from "../../resources/best/2.png";
import third from "../../resources/best/3.png";
import "./bestItems.scss";
import Context from "../../context";


function renderItems(coffeeData) {
    const elements = coffeeData.map(({img, name, price}, i) => {
        if (i>2) return;
        return (
            <Link to={`/coffee/${name}`} key={i} className="best__products-item item">
                <div className="item__img-box">
                    <img src={img} alt="coffee-item" className="item__img"/>
                </div>
                <p className="item__name">{name}</p>
                <p className="item__price">{price}</p>
            </Link>
        )
    });
    return elements;
}

const BestItems = () => {

    const {coffeeData} = useContext(Context);


    const items = renderItems(coffeeData);

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