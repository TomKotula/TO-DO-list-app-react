import { ToggleButtonEvents, TextButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <ToggleButtonEvents>
      <TextButtons
        onClick={toggleHideDone}
      >
        {hideDone ? "Show" : "Hide"} completed tasks
      </TextButtons>
      <TextButtons
        disabled={tasks.every(({ done }) => done)}
        onClick={() => setAllDone()}
      >
        Complete all tasks
      </TextButtons>
    </ToggleButtonEvents>
  );

export default Buttons;