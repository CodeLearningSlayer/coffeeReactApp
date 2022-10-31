import AboutInfo from "../aboutInfo/AboutInfo";
import "./aboutBlock.scss"

const AboutBlock = (props) => {

    const {img, text, alt, title, html, classes} = props;

    return ( 
        <>
            <div className="beans__about about container">
                    <img
                    src={`${img}`}
                    alt={`${alt}`}
                    className="beans__about-img about-img"/>
                    <AboutInfo classes={classes} html={html} title={title} textFirst={text}/>
            </div>
        </>
    )
}

export default AboutBlock;