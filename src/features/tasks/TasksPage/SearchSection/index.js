import Search from "./Search";
import { Wrapper, SearchContent, Header } from "./styled";

const SearchSection = () => {
  return (
    <Wrapper>
      <SearchContent>
        <Header>Search</Header>
      </SearchContent>
      <SearchContent>
        <Search />
      </SearchContent>
    </Wrapper>
  );
};

export default SearchSection;
