import { Link } from "react-router-dom";
import "./headerCommon.scss";

const HeaderCommon = (props) => {
    const {bg, title, type} = props;
    return (
        <header className={`header ${type === 'entered' ? '' : 'header-page'}`} style={{'backgroundImage' : `url(${bg})`}}>
            <div className="container">
                <nav className="header-page__nav nav">
                    <Link to="/" className="nav__item nav__item--first">Coffee house</Link>
                    <Link to="/coffee" className="nav__item">Our coffee</Link>
                    <Link to="/goods" className="nav__item">For your pleasure</Link>
                </nav>
            <h1 className="header__title">{title}</h1>
            </div>
        </header>
    )
}

export default HeaderCommon;