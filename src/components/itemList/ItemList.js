import "./itemList.scss"
import { useContext, memo } from "react";
import Context from "../../context";

// попробовать использовать контекст

const ItemList = memo(() => {

    const {items} = useContext(Context);

    const coffeeItems = items.map((item, i) => {
        return (
            <a className="goods__list-item product" key={i} href="#">
                <div className="product__img-box">
                    <img src={`${item.img}`} alt="coffee-item" className="item__img"/>
                </div>
                <p className="product__name">{item.name}</p>
                <p className="product__country">{item.country}</p>
                <p className="product__price">{item.price}</p>
            </a>
        )
    })


    return (
        <div className="goods__list">
            {coffeeItems}    
        </div>
    )
} )

export default ItemList;