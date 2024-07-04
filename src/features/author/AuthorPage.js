import Header from "../../common/Header";
import { Wrapper, AuthorSection, AuthorContent, AuthorName, AuthorLink } from "./styled";

const AurthorComponent = () => {
  return (
    <Wrapper>
      <Header title="About author" />
      <AuthorSection>
        <AuthorName>Tom Kotula</AuthorName>
      </AuthorSection>
      <AuthorSection>
        <AuthorContent>
          My passion for motorization began at the age of 18 when I completed my
          driving license course. Since then, I have been particularly
          fascinated by American motorization, especially naturally aspirated
          engines and muscle cars. Currently, I am working on a website
          dedicated to four automotive legends: Mustang, Camaro, Challenger, and
          Charger.
          <p>
            Come, take a look at my project: {""}
            <AuthorLink
              target="blank"
              href="https://tomkotula.github.io/muscle-cars-react/"
            >
              Muscle Cars
            </AuthorLink>
          </p>
        </AuthorContent>
      </AuthorSection>
    </Wrapper>
  );
};

export default AurthorComponent;
