import HeaderCommon from "../components/headerCommon/HeaderCommon";
import AppFooter from "../components/appFooter/AppFooter";
import { Outlet } from "react-router-dom";
import bg from "../resources/coffee-bg.png"
import {Helmet} from "react-helmet"


const CoffeePage = () => {

    return(
        <>
            <Helmet>
                <meta
                    name="About coffee"
                    content="Page with coffee items"
                />
                <title>Our coffee</title>
            </Helmet>
            <HeaderCommon 
            title="Our coffee" 
            bg={bg}/>
                <Outlet/>
            <AppFooter/>
        </>
    )
}

export default CoffeePage