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

export const AuthorSection = styled.div`
  background-color: white;
  border: none;
  margin: 0px 2px 2px 2px;
  padding: 20px;
`;

export const AuthorName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0.5px 2px 2px 2px;
`;

export const AuthorContent = styled.div`
  text-align: justify;
`;

export const AuthorLink = styled.a`
  text-decoration: none;
  color: #1451b8;
`;
