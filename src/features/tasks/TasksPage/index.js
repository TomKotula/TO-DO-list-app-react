import Form from "./Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import SectionList from "../../../common/SectionList";
import Container from "../../../common/Container";
import SearchSection from "./SearchSection";

function TasksPage() {
  return (
    <Container>
      <Header title="TO-DO list" />
      <Main>
        <Form />
        <SearchSection />
        <Section title="TO-DO list" extraSectionContent={<Buttons />} />
      </Main>
      <SectionList>
        <TaskList />
      </SectionList>
    </Container>
  );
}

export default TasksPage;
