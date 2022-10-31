import "./headerCommon.scss"

const HeaderCommon = (props) => {
    const {bg, title, type} = props;
    return (
        <header className={`header ${type === 'entered' ? '' : 'header-page'}`} style={{'backgroundImage' : `url(${bg})`}}>
            <div className="container">
                <nav className="header-page__nav nav">
                    <a href="#" className="nav__item nav__item--first">Coffee house</a>
                    <a href="#" className="nav__item">Our coffee</a>
                    <a href="#" className="nav__item">For your pleasure</a>
                </nav>
            <h1 className="header__title">{title}</h1>
            </div>
        </header>
    )
}

export default HeaderCommon;