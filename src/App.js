import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import SectionList from "./SectionList";
import Container from "./Container";
import { useState } from "react";
import useTasks from "./Tasks/useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="TO-DO list" />
      <Main>
        <Form addNewTask={addNewTask} />
        <Section
          title="TO-DO list"
          extraSectionContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Main>
      <SectionList>
        <Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
      </SectionList>
    </Container>
  );
}

export default App;
