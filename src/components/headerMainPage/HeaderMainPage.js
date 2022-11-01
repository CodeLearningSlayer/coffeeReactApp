import "./headerMainPage.scss";
import HeaderCommon from "../headerCommon/HeaderCommon"; 
import AppSeparator from "../appSeparator/AppSeparator";
import bg from "../../resources/main-bg.png";
import { Link } from "react-router-dom";


const HeaderMainPage = () => {

    return (
        <div className="header__wrapper" style={{'backgroundImage': `url(${bg})`}}>
            <HeaderCommon title="Everything You Love About Coffee" type="entered"/>
            <div className="header__separator separator">
            <AppSeparator/>
            </div>
            <h4 className="header__info">
                We makes every day full of energy and taste
            </h4>
            <h4 className="header__sub">Want to try our beans?</h4>
            <div className="header__more">
                <Link to="/goods" className="header__more-link">More</Link>
            </div>
        </div>
    )
}

export default HeaderMainPage;