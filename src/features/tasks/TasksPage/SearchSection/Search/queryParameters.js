import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(history.location.search);

    if (value === undefined || value === null || value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${history.location.pathname}?${searchParams.toString()}`);
  };
};
