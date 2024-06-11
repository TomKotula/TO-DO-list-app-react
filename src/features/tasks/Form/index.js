import { useState } from "react";
import { FormFieldset, FormLabel, FormInput, AddButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import useFocus from "./useFocus";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const [inputRef, setInputFocus] = useFocus();
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

         if (newTaskContent.trim() === "") {
           setInputFocus();
           return;
         }

        dispatch(
          addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
          })
        );
        
        setNewTaskContent("");
    };

    return (
      <form onSubmit={onFormSubmit}>
        <FormFieldset>
          <FormLabel>Add a new task</FormLabel>
        </FormFieldset>
        <FormFieldset>
          <FormInput
            ref={inputRef}
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