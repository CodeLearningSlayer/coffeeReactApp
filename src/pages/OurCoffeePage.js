import { useState } from "react";
import HeaderCommon from "../components/headerCommon/HeaderCommon";
import bg from "../resources/coffee-bg.png"
import AboutBlock from "../components/aboutBlock/AboutBlock";
import aboutBeans from "../resources/beans-about.png"
import Context from "../context";
import AppSearch from "../components/appSearch/AppSearch"
import AppFilters from "../components/appFilters/AppFilters";
import ItemList from "../components/itemList/ItemList";
import AppFooter from "../components/appFooter/AppFooter";

const OurCoffeePage = ({coffeeData, items, filterItems, searchItem}) => {

    const [filter, setFilter] = useState("all");

    return(
        <>
            <HeaderCommon title="Our coffee" bg={bg}/>
            <AboutBlock img={aboutBeans} 
                        alt="girl with coffee"
                        text={
                           "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. \n Afraid at highly months do things on at.Situation recommend objection do intention so questions. \n As greatly removed calling pleased improve an. Last ask him cold feel \n met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
                        }
                        title="About our beans"/>
            <div className="separation-line"></div>
                <section className="goods">
                    <div className="goods__top">
                        <AppSearch/>
                        <AppFilters/>
                    </div>
                    <ItemList/>
                </section>
            <AppFooter/>
        </>
    )
}

export default OurCoffeePage;