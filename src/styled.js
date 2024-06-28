import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

export const AppList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  background-color: rgb(39, 124, 124);
`;

export const AppListItem = styled.li`
  padding: 30px;
  list-style-type: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;
