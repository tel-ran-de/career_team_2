import React, { useState } from "react";
import Button from "../../UI/Button";
import s from "./index.module.scss";
import { Context } from "../../context";
import { useContext, useCallback } from "react";

export default function MainContentForm() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const { search } = useContext(Context);

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

  return (
    <div>
      <div className={s.button}>
        <Button onClick={checkAll}>Check all</Button>
        <Button onClick={checkNone}>Check none</Button>
      </div>

      <form className={s.checkbox_container} action="" onSubmit={search}>
        <h3>Search by majors</h3>

        <p>
          <input type="checkbox" id="accounting" name="accounting" />
          <label htmlFor="accounting">accounting</label>
        </p>

        <p>
          <input type="checkbox" id="marketing" name="marketing" />
          <label htmlFor="marketing">Marketing</label>
        </p>

        <p>
          <input type="checkbox" id="computer_it" name="computer_it" />
          <label htmlFor="computer_it">Computer and IT systems</label>
        </p>

        {showMore1 && (
          <p>
            <input type="checkbox" id="computer_it2" name="computer_it2" />
            <label htmlFor="computer_it2">demo</label>
          </p>
        )}
        <p onClick={() => setShowMore1((prev) => !prev)}>...</p>
        <h3>Search by industry</h3>

        <p>
          <input type="checkbox" id="aviation" name="aviation" />
          <label htmlFor="aviation">Aviation</label>
        </p>

        <p>
          <input type="checkbox" id="it_telecom" name="it_telecom" />
          <label htmlFor="it_telecom">IT and Telecom</label>
        </p>

        <p>
          <input type="checkbox" id="healthcare" name="healthcare" />
          <label htmlFor="healthcare">Healthcare</label>
        </p>

        {showMore2 && (
          <p>
            <input type="checkbox" id="computer_it3" name="computer_it3" />
            <label htmlFor="computer_it3">demo</label>
          </p>
        )}
        <p onClick={() => setShowMore2((prev) => !prev)}>...</p>

        <h3>Search by company size</h3>

        <p>
          <input
            type="checkbox"
            id="microenterprises"
            name="microenterprises"
          />
          <label htmlFor="microenterprises">Microenterprises</label>
        </p>

        <p>
          <input
            type="checkbox"
            id="smallenterprises"
            name="smallenterprises"
          />
          <label htmlFor="smallenterprises">Small enterprises</label>
        </p>

        <p>
          <input
            type="checkbox"
            id="mediumenterprises"
            name="mediumenterprises"
          />
          <label htmlFor="mediumenterprises">Medium-sized enterprises</label>
        </p>

        <p>
          <input
            type="checkbox"
            id="largeenterprises"
            name="largeenterprises"
          />
          <label htmlFor="largeenterprises">Large enterprises</label>
        </p>

        <div className={s.search_button}>
          <Button>Search</Button>
        </div>
      </form>
    </div>
  );
}