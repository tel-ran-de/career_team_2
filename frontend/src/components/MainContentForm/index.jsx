import React, { useState } from "react";
import Button from "../../UI/Button";
import s from "./index.module.scss";
import { Context } from "../../context";
import { useContext, useCallback, useEffect } from "react";
import { getCategories, getCategoryTypes } from "../../requests/getData";
import { Link } from "react-router-dom";

export default function MainContentForm() {
  const { search } = useContext(Context);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [categories1, setCategories1] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [categories3, setCategories3] = useState([]);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const checkAll = useCallback(() => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((e) => (e.checked = true));
  }, []);

  const checkNone = useCallback(() => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((e) => (e.checked = false));
  }, []);

  useEffect(() => {
    getCategoryTypes(setCategoryTypes);
    getCategories(setCategories1, setCategories2, setCategories3);
  }, []);

  return (
    <div>
      <Link to="/Day">DEMO LINK</Link>
      <div className={s.button}>
        <Button onClick={checkAll}>Check all</Button>
        <Button onClick={checkNone}>Check none</Button>
      </div>

      <form className={s.checkbox_container} action="" onSubmit={search}>
        <h3>Search by {categoryTypes[0] && categoryTypes[0].name}</h3>

        {categories1.length > 0 &&
          categories1.slice(0, 3).map(({ name, categoryId }) => (
            <p key={categoryId}>
              <input type="checkbox" id={categoryId} name={categoryId} />
              <label htmlFor={categoryId}>{name}</label>
            </p>
          ))}

        {showMore1 &&
          categories1.length > 0 &&
          categories1.slice(3).map(({ name, categoryId }) => (
            <p key={categoryId}>
              <input type="checkbox" id={categoryId} name={categoryId} />
              <label htmlFor={categoryId}>{name}</label>
            </p>
          ))}

        {categories1.length > 3 && (
          <p
            className={s.show_more}
            onClick={() => setShowMore1((prev) => !prev)}
          >
            show more...
          </p>
        )}

        <h3>Search by {categoryTypes[1] && categoryTypes[1].name}</h3>

        {categories2.length > 0 &&
          categories2.slice(0, 3).map(({ name, categoryId }) => (
            <p key={categoryId}>
              <input type="checkbox" id={categoryId} name={categoryId} />
              <label htmlFor={categoryId}>{name}</label>
            </p>
          ))}

        {showMore2 &&
          categories2.length > 0 &&
          categories2.slice(3).map(({ name, categoryId }) => (
            <p key={categoryId}>
              <input type="checkbox" id={categoryId} name={categoryId} />
              <label htmlFor={categoryId}>{name}</label>
            </p>
          ))}

        {categories2.length > 3 && (
          <p
            className={s.show_more}
            onClick={() => setShowMore2((prev) => !prev)}
          >
            show more...
          </p>
        )}

        <h3>Search by {categoryTypes[2] && categoryTypes[2].name}</h3>

        {categories3.length > 0 &&
          categories3.map(({ name, categoryId }) => (
            <p key={categoryId}>
              <input type="checkbox" id={categoryId} name={categoryId} />
              <label htmlFor={categoryId}>{name}</label>
            </p>
          ))}

        <div className={s.search_button}>
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
}
