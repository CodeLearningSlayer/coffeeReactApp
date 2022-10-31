import AboutBlock from "../components/aboutBlock/AboutBlock"
import AppFooter from "../components/appFooter/AppFooter"
import HeaderCommon from "../components/headerCommon/HeaderCommon"
import ItemList from "../components/itemList/ItemList"
import bg from "../resources/pleasure-bg.png"
import pleasureImg from "../resources/products-about.png"
import Context from "../context";

const PleasurePage = ({items, filterItems, searchItem}) => {

    return(
        <>
            <HeaderCommon 
            title="For your pleasure"
            bg={bg}/>
            <AboutBlock
            title="About our goods"
            img={pleasureImg}
            text={"Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n Afraid at highly months do things on at. Situation recommend objection do intention so questions.\n As     greatly removed calling pleased improve an. Last ask him cold feel \n met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."}
            />
            <div className="separation-line"/>
            <section className="goods">
                <ItemList/>
            </section>
            <AppFooter/>
        </>
    )
}

export default PleasurePage;