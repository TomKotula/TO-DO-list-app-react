import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import SectionList from "./SectionList";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "przejsc na reacta", done: false },
  { id: 2, content: "zjesc kolacje", done: true },
]

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="TO-DO list" />
      <Main>
        <Form />
        <Section
          title="TO-DO list"
          extraSectionContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
        />
      </Main>
      <SectionList>
        <Tasks
          tasks={tasks}
          hideDone={hideDone}
        />
      </SectionList>
    </Container>
  );
}

export default App;
