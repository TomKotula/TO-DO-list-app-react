import { styled } from "styled-components";

export const FormFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: none;
  margin: 2px;
  padding: 20px;
  font-weight: bold;
`;

export const FormLabel = styled.label`
  font-size: 20px;
`;

export const AddButton = styled.button`
  background-color: rgb(39, 124, 124);
  color: white;
  padding: 12px;
  border: none;
  width: 110px;
  margin-left: 20px;
  transition: 0.5s;
  font-size: 15px;

  &:hover {
    transform: scale(1.15);
    background-color: rgb(49, 153, 153);
  }

  &:active {
    background-color: rgb(58, 182, 182);
  }

  @media (max-width: 767px), (max-width: 992px), (max-width: 1200px) {
    width: 100%;
    margin-top: 10px;
    margin-left: 0px;
  }
`;
