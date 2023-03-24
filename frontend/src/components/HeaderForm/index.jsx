import React, { useState, useCallback, useContext, useRef } from "react";
import { Context } from "../../context";
import Input from "../../UI/Input";
import debounce from "lodash.debounce";
import s from "./index.module.scss";
import Button from "../../UI/Button";
import { domain } from "../../requests/domain";
import { Link } from "react-scroll";

export default function HeaderForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { inputValue, setInputValue, search } = useContext(Context);
  const inputRef = useRef();

  const handleChange = useCallback(
    debounce((value) => {
      fetch(`${domain}/profession/search?name=${value}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchTerm(data);
          setInputValue(inputRef.current.value);
        })
        .catch((error) => console.log(error));
    }, 100),
    [setSearchTerm]
  );

  const handleSelect = (el) => {
    inputRef.current.value = el;
    setInputValue(el);
    setSearchTerm([]);
  };

  return (
    <div className={s.form}>
      <div className={s.input_block}>
        <Input
          type="text"
          className={s.search}
          ref={inputRef}
          placeholder={inputValue ? inputValue : "Search"}
          onChange={(el) => handleChange(el.target.value)}
          onKeyPress={(e) => e.key === "Enter" && search(e)}
          defaultValue={inputValue}
        />
        {searchTerm.length > 0 && (
          <div className={s.autocomplete}>
            {searchTerm.slice(0, 4).map((el, index) => (
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

      <Link
        to="videos_container"
        spy={true}
        smooth={true}
        offset={-50}
        duration={600}
      >
        <Button onClick={search}>Search</Button>
      </Link>
    </div>
  );
}
