import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper, TaskDetailsSection, TaskName } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Wrapper>
      <Header title="Task details" />
      <TaskDetailsSection>
        <TaskName>{task ? task.content : "Task not found 🙁"}</TaskName>
      </TaskDetailsSection>
      {task && (
        <TaskDetailsSection>
          <strong>Completed: </strong> {task.done ? "Yes ✅" : "No ❌"}
        </TaskDetailsSection>
      )}
    </Wrapper>
  );
}

export default TaskPage;
