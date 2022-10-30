import "./aboutInfo.scss";
import AppSeparator from "../appSeparator/AppSeparator";

const AboutInfo = (props) => {

    const {title, textFirst, textSecond} = props;

    return (
        <>
            <div className="container">
                <h2 className="about__title title">{title}</h2>
                <AppSeparator type="black"/>
                <div className="about__inner">
                <p className="about__inner-text">
                    {textFirst}
                </p>
                <p className="about__inner-text">
                    {textSecond}
                </p>
                </div>
            </div>
        </>
    )
}

export default AboutInfo;