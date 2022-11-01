import HeaderMainPage from "../components/headerMainPage/HeaderMainPage";
import AboutInfo from "../components/aboutInfo/AboutInfo";
import BestItems from "../components/bestItems/BestItems";
import AppFooter from "../components/appFooter/AppFooter";
import {Helmet} from "react-helmet"

const MainPage = () => {
    return (
        <>

            <Helmet>
                <meta
                    name="Our coffee"
                    content="Main page"
                />
                <title>Coffee house</title>
            </Helmet>        
            <HeaderMainPage/>
            <section className="about">
                <AboutInfo title="About us" textFirst="Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face." textSecond="Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now." classes="about-info--mainpage"/>
            </section>
            <section className="best">
                <BestItems/>
            </section>
            <AppFooter/>
        </>
        
    )
}

export default MainPage;