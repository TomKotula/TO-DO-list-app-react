import SearchComponent from "./Search";
import { Wrapper, SearchContent, Header } from "./styled";

const SearchSection = () => {
  return (
    <Wrapper>
      <SearchContent>
        <Header>Search</Header>
      </SearchContent>
      <SearchContent>
        <SearchComponent />
      </SearchContent>
    </Wrapper>
  );
};

export default SearchSection;
