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