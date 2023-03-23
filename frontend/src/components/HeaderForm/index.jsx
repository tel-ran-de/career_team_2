import React, { useState, useCallback, useContext } from "react";
import { Context } from "../../context";
import Input from "../../UI/Input";
import debounce from "lodash.debounce";
import s from "./index.module.scss";
import Button from "../../UI/Button";

export default function HeaderForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setInputValue, search } = useContext(Context);

  const handleChange = useCallback(
    debounce((value) => {
      fetch(`/category`)
      // fetch(`/category/search=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchTerm(data);
          setInputValue(data);
        });
    }, 200),
    [searchTerm]
  );

  return (
    <div className={s.form}>
      <div>
        <Input
          type="text"
          className={s.search}
          placeholder="Search"
          onChange={(el) => handleChange(el.target.value)}
        />
        {searchTerm.length > 0 && (
          <div className={s.autocomplete}>
            {searchTerm.map((el, index) => (
              <div key={index} className={s.autocompleteItems}>
                <span>{el.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <Button>Search</Button>
    </div>
  );
}
