import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import s from './index.module.css'


export default function SearchBarInput() {

    const [searchTerm, setSearchTerm] = useState([]);
    const [selectedTerm, setSelectedTerm] = useState('');

    const handleChange = useCallback(debounce((value) => {
        fetch(`http://localhost:8080/profession?search=${value}`)
            .then((res) => res.json())
            .then((data) => setSearchTerm(data))
            .catch((error) => console.log(error))
    }, 200), [fetch, setSearchTerm]);

    const handleSelect = (el) => {
        setSelectedTerm(el);
        setSearchTerm([]);
    }

    return (
        <div>
            <input
                type="text"
                className={s.search}
                placeholder="Search"
                onChange={(el) => handleChange(el.target.value)}
                value={selectedTerm !== null ? selectedTerm : ''}
            />
            <button className={s.btn_search}>Search</button>
            {
                searchTerm.length > 0 && (
                    <div className={s.autocomplete}>
                        {searchTerm.map((el, index) => (
                            <div key={index} className={s.autocompleteItems} onClick={() => handleSelect(el.name)}>
                                <span>{el.name}</span>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}