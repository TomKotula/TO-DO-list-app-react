import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice";
import { ToggleButtonEvents, TextButtons } from "../styledButtons";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <div>
      <ToggleButtonEvents>
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
