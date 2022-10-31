import CoffeeItem from "../components/coffeeItem/CoffeeItem";
import HeaderCommon from "../components/headerCommon/HeaderCommon";
import AppFooter from "../components/appFooter/AppFooter";
import bg from "../resources/coffee-bg.png"

const SingleCoffeePage = () => {

    return (
        <>
        <HeaderCommon 
            bg={bg}
            title="Our Coffee"/>    
        <CoffeeItem/>
        <AppFooter/>
        </>
    )
}

export default SingleCoffeePage;