import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <label className="form__label">Add a new task</label>
            </fieldset>
            <fieldset className="form__fieldset">
                <input
                    value={newTaskContent}
                    className="form__input"
                    type="text"
                    placeholder="What is there to do?"
                    onChange={({ target }) => setNewTaskContent(target.value)}
                />
                <button className="form__button">Add a task</button>
            </fieldset>
        </form>
    );
};

export default Form;