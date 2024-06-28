import checkmark from "./checkmark.png";
import bin from "./bin.png";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItem,
  DoneButton,
  Content,
  RemoveButton,
  StyledLink,
} from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector((state) => state.tasks.hideDone);
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
              <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
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
};

export default TaskList;
