import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  background-color: white;
  margin: 2px 2px 2px 2px;
  padding: 30px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-bottom: 1.5px solid #e2e0e0;
`;

export const DoneButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  height: 30px;
  width: 30px;
  border: none;

  &:hover {
    background-color: rgb(8, 160, 8);
  }

  &:active {
    background-color: rgb(13, 186, 13);
  }

  ${({ $done }) =>
    $done &&
    css`
      .js-checkmarkIcon {
        height: 15px;
        width: 15px;
      }
    `}
`;

export const Content = styled.div`
  flex-grow: 1;
  padding-left: 10px;
  font-size: 15px;

  @media (max-width: 550px),
    (max-width: 767px),
    (max-width: 992px),
    (max-width: 1280px) {
    word-wrap: break-word;
    overflow: hidden;
    width: 195px;
  }

  &.js-contentLineThrough {
    text-decoration: line-through;
  }
`;

export const RemoveButton = styled.img`
  height: 30px;
  width: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
`;
