import { styled } from "styled-components";

export const ToggleButtonEvents = styled.div`
  border: none;
  background-color: white;
  color: teal;
  font-size: 15px;

  &:hover {
    color: rgb(7, 162, 162);
  }

  &:active {
    color: rgb(15, 205, 205);
  }

  @media (max-width: 550px) {
    padding: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const TextButtons = styled.button`
  border: none;
  background-color: white;
  color: teal;
  font-size: 15px;
  margin: 5px 0;

  &:hover {
    color: rgb(7, 162, 162);
  }

  &:active {
    color: rgb(15, 205, 205);
  }

  &:disabled {
    color: #ccc;
  }
`;