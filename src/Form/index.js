import "./style.css";

const Form = () => (
        <form className="form">
            <fieldset className="form__fieldset">
                <label className="form__label">Add a new task</label>
            </fieldset>
            <fieldset className="form__fieldset">
                <input className="form__input" type="text" placeholder="What is there to do?" />
                <button className="form__button">Add a task</button>
            </fieldset>
        </form>
);

export default Form;