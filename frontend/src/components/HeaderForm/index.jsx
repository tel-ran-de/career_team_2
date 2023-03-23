import React, { useState, useCallback, useContext, useRef } from "react";
import { Context } from "../../context";
import Input from "../../UI/Input";
import debounce from "lodash.debounce";
import s from "./index.module.scss";
import Button from "../../UI/Button";

export default function HeaderForm() {
  const [searchTerm, setSearchTerm] = useState([]);
  const { setInputValue, search } = useContext(Context);
  const inputRef = useRef();

  const handleChange = useCallback(
    debounce((value) => {
      fetch(`/profession/search?name=${value}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSearchTerm(data);
          setInputValue(inputRef.current.value);
        })
        .catch((error) => console.log(error));
    }, 200),
    [setSearchTerm]
  );

  const handleSelect = (el) => {
    inputRef.current.value = el;
    setInputValue(inputRef.current.value);
    setSearchTerm([]);
  };

  return (
    <div className={s.form}>
      <div>
        <Input
          type="text"
          className={s.search}
          ref={inputRef}
          placeholder="Search"
          onChange={(el) => handleChange(el.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              search();
            }
          }}
        />
        {searchTerm.length > 0 && (
          <div className={s.autocomplete}>
            {searchTerm.map((el, index) => (
              <div
                key={index}
                className={s.autocompleteItems}
                onClick={() => handleSelect(el.name)}
              >
                <span>{el.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <Button onClick={search}>Search</Button>
    </div>
  );
}
