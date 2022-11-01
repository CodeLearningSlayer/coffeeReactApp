import AppSeparator from "../appSeparator/AppSeparator"
import { Link } from "react-router-dom";
import "./appFooter.scss";
const AppFooter = () => {
    return (
        <footer className="footer">
        <nav className="footer__nav nav">
            <Link to="/" className="footer__nav-item nav__item nav__item--first footer__nav-item--first">
                Coffee house
            </Link>
            <Link to="/coffee" className="footer__nav-item nav__item">Our coffee</Link>
            <Link to="/goods" className="footer__nav-item nav__item">For your pleasure</Link>
          </nav>
            <AppSeparator type="black"/>
        </footer>
    )
}

export default AppFooter;