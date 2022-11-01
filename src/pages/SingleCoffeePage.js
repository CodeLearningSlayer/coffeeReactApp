import CoffeeItem from "../components/coffeeItem/CoffeeItem";
import HeaderCommon from "../components/headerCommon/HeaderCommon";
import AppFooter from "../components/appFooter/AppFooter";
import bg from "../resources/coffee-bg.png"
import Context from "../context";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const SingleCoffeePage = () => {

    const {name} = useParams();
    const {coffeeData} = useContext(Context);

    return (
        <>  
        <CoffeeItem country={coffeeData.find(element => element.name === name).country} 
                    description={coffeeData.find(element => element.name === name).description} 
                    price={coffeeData.find(element => element.name === name).price}/>
        </>
    )
}

export default SingleCoffeePage;