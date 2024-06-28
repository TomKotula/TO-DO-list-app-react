import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../../Input";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Input
      placeholder="Filter tasks"
      value={query || ""}
      onChange={onInputChange}
    />
  );
};
