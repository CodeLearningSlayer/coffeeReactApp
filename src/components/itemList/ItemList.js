import "./itemList.scss"
import { useContext, memo } from "react";
import Context from "../../context";
import { Link } from "react-router-dom";


// попробовать использовать контекст

const ItemList = memo(() => {

    const {items} = useContext(Context);

    const coffeeItems = items.map((item, i) => {
        return (
            <Link to={`/coffee/${item.name}`} className="goods__list-item product" key={i}>
                <div className="product__img-box">
                    <img src={`${item.img}`} alt="coffee-item" className="item__img"/>
                </div>
                <p className="product__name">{item.name}</p>
                <p className="product__country">{item.country}</p>
                <p className="product__price">{item.price}</p>
            </Link>
        )
    })


    return (
        <div className="goods__list">
            {coffeeItems}    
        </div>
    )
} )

export default ItemList;