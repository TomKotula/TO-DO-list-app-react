import checkmark from "./checkmark.png";
import bin from "./bin.png";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, DoneButton, Content, RemoveButton } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
   
  return (
    <List>
      {tasks.map((task) =>
        hideDone && task.done ? null : (
          <ListItem key={task.id}>
            <DoneButton
              $done={task.done}
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? (
                <img
                  src={checkmark}
                  className="js-checkmarkIcon"
                  alt="checkmark"
                />
              ) : null}
            </DoneButton>
            <Content className={`${task.done ? "js-contentLineThrough" : ""}`}>
              {task.content}
            </Content>
            <RemoveButton
              src={bin}
              alt="bin"
              onClick={() => dispatch(removeTask(task.id))}
            />
          </ListItem>
        )
      )}
    </List>
  );
}

export default TaskList;
