import { useState } from "react";
import { FormFieldset, FormLabel, FormInput, AddButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
      <form onSubmit={onFormSubmit}>
        <FormFieldset>
          <FormLabel>Add a new task</FormLabel>
        </FormFieldset>
        <FormFieldset>
          <FormInput
            value={newTaskContent}
            type="text"
            placeholder="What is there to do?"
            onChange={({ target }) => setNewTaskContent(target.value)}
          />
          <AddButton>Add a task</AddButton>
        </FormFieldset>
      </form>
    );
};

export default Form;