import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppList, AppListItem, StyledNavLink } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <AppList>
        <AppListItem>
          <StyledNavLink to="/tasks">Tasks</StyledNavLink>
        </AppListItem>
        <AppListItem>
          <StyledNavLink to="/author">About author</StyledNavLink>
        </AppListItem>
      </AppList>
      <Switch>
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
