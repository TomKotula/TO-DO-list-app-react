import "./style.css";

const Section = ({ title, extraSectionContent }) => (
    <div className="section__beforeList section__beforeList--margin">
        <label className="section__label">{title}</label>
        {extraSectionContent}
    </div>
);

export default Section;