import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../tasksSlice";
import { ToggleButtonEvents, TextButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <div>
      <ToggleButtonEvents>
        <TextButtons
          onClick={() => {
            dispatch(fetchExampleTasks());
          }}
        >
          Download example tasks
        </TextButtons>
        {tasks.length > 0 && (
          <>
            <TextButtons onClick={() => dispatch(toggleHideDone())}>
              {hideDone ? "Show" : "Hide"} completed tasks
            </TextButtons>
            <TextButtons
              disabled={tasks.every(({ done }) => done)}
              onClick={() => dispatch(setAllDone())}
            >
              Complete all tasks
            </TextButtons>
          </>
        )}
      </ToggleButtonEvents>
    </div>
  );
};

export default Buttons;
