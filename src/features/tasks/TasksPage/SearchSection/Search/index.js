import Input from "../../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";

export default () => {
  const query = useQueryParameter("search");
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: "search",
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Input
      placeholder="Filter tasks"
      value={query || ""}
      onChange={onInputChange}
    />
  );
};
