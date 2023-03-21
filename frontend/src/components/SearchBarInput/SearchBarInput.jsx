import React, { useState, useMemo, useCallback, useEffect } from "react";
import { categories } from "../../data/categories";
import debounce from "lodash.debounce";
import s from './index.module.css'


export default function SearchBarInput() {

    const [searchTerm, setSearchTerm] = useState("");

    let listToDisplay = categories;

    const handleChange = useCallback((el) => {
        setSearchTerm(el.target.value);
    }, []);

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
        <div>
            <input
                className={s.search}
                type="text"
                onChange={debouncedResults} />
            {renderVideoList()}
        </div>
    )
}
