import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Main from "../../Main";
import SectionList from "../../SectionList";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header title="TO-DO list" />
      <Main>
        <Form />
        <Section title="TO-DO list" extraSectionContent={<Buttons />} />
      </Main>
      <SectionList>
        <TaskList />
      </SectionList>
    </Container>
  );
}

export default Tasks;
