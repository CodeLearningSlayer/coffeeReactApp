import AppSeparator from "../appSeparator/AppSeparator"
import "./appFooter.scss";
const AppFooter = () => {
    return (
        <footer className="footer">
        <nav className="footer__nav nav">
            <a href="#" className="footer__nav-item nav__item nav__item--first footer__nav-item--first">
                Coffee house
            </a>
            <a href="#" className="footer__nav-item nav__item">Our coffee</a>
            <a href="#" className="footer__nav-item nav__item">For your pleasure</a>
          </nav>
            <AppSeparator type="black"/>
        </footer>
    )
}

export default AppFooter;