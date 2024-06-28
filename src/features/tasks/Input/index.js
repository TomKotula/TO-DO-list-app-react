import { styled } from "styled-components";

export default styled.input`
  width: 85%;
  padding: 10px;
  border: 2px solid #e2e0e0;

  &::placeholder {
    color: #969696;
  }

  @media (max-width: 912px), (max-width: 992px), (max-width: 1200px) {
    width: 100%;
  }
`;
