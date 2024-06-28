import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1000px;
  margin-top: 10px;

  @media (max-width: 912px) {
    max-width: 100%;
  }
`;

export const SearchContent = styled.div`
  background-color: white;
  border: none;
  padding: 20px;
  margin: 0.5px 2px 2px 2px;
`;

export const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0.5px 2px 2px 2px;
`;

