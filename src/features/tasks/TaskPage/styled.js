import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1000px;
  margin-top: 50px;

  @media (max-width: 912px) {
    margin: 20px;
    max-width: 100%;
  }
`;

export const TaskDetailsSection = styled.div`
  background-color: white;
  border: none;
  margin: 0px 2px 2px 2px;
  padding: 20px;
`;

export const TaskName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 2px 2px 2px;
`;
