import { SectionContainer, SectionLabel } from "./styled";

const Section = ({ title, extraSectionContent }) => (
  <SectionContainer>
    <SectionLabel>{title}</SectionLabel>
    {extraSectionContent}
  </SectionContainer>
);

export default Section;