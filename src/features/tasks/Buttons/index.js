import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { ToggleButtonEvents, TextButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();

  return tasks.length > 0 &&  (
    <ToggleButtonEvents>
      <TextButtons
        onClick={() => dispatch(toggleHideDone())}
      >
        {hideDone ? "Show" : "Hide"} completed tasks
      </TextButtons>
      <TextButtons
        disabled={tasks.every(({ done }) => done)}
        onClick={() => dispatch(setAllDone())}
      >
        Complete all tasks
      </TextButtons>
    </ToggleButtonEvents>
  );
}

export default Buttons;