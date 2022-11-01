import HeaderCommon from "../components/headerCommon/HeaderCommon";
import AppFooter from "../components/appFooter/AppFooter";
import { Outlet } from "react-router-dom";
import bg from "../resources/coffee-bg.png"



const CoffeePage = () => {

    return(
        <>
            <HeaderCommon 
            title="Our coffee" 
            bg={bg}/>
                <Outlet/>
            <AppFooter/>
        </>
    )
}

export default CoffeePage