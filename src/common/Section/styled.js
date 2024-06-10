import { styled } from "styled-components";

export const SectionContainer = styled.div`
  background-color: white;
  border: none;
  padding: 20px;
  font-weight: bold;
  margin: 10px 2px 0px 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 550px), (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SectionLabel = styled.label`
  font-size: 20px;
`;
