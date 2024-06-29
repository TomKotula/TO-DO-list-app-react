import { useState } from "react";
import { FormFieldset, FormLabel, AddButton } from "./styled";
import { TextButtons } from "../styledButtons";
import { useDispatch } from "react-redux";
import { addTask, fetchExampleTasks } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import useFocus from "./useFocus";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [inputRef, setInputFocus] = useFocus();
  const [isLoading, setIsLoading] = useState(false);
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

  const handleTextButtonClick = (event) => {
    event.preventDefault();
    dispatch(fetchExampleTasks());
    setIsLoading(true);

    setTimeout(async () => {
      try {
        await dispatch(fetchExampleTasks());
      } catch (error) {
        console.error("Failed to fetch example tasks", error);
        alert("Failed to download example tasks");
      }
    }, 500);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <FormFieldset>
        <FormLabel>Add a new task</FormLabel>
        <TextButtons onClick={handleTextButtonClick} disabled={isLoading}>
          {isLoading ? "Loading..." : "Download example tasks"}
        </TextButtons>
      </FormFieldset>
      <FormFieldset>
        <Input
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
