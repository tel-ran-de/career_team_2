import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { Context } from "../../context";
import { categories } from "../../data/categories";
import Input from "../../UI/Input";
import debounce from "lodash.debounce";
import s from "./index.module.scss";
import Button from "../../UI/Button";

export default function HeaderForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setInputValue, search } = useContext(Context);

  let listToDisplay = categories;

  const handleChange = useCallback(
    (el) => {
      setSearchTerm(el.target.value);
      setInputValue(el.target.value);
    },
    [setInputValue]
  );

  const renderVideoList = () => {
    return listToDisplay.map((category, i) => <p key={i}>{category}</p>);
  };

  if (searchTerm !== "") {
    listToDisplay = categories.filter((category) => {
      return category.includes(searchTerm);
    });
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 200);
  }, [handleChange]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <div className={s.form} onClick={search}>
      <div>
        <Input type="text" onChange={debouncedResults} />
        {renderVideoList()}
      </div>

      <div>
        <Button>Search</Button>
      </div>
    </div>
  );
}
