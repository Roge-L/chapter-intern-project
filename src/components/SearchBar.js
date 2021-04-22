import React, { useState } from 'react'
import '../stylesheets/SearchBar.css'
import { loadData, result } from '../logic'

let bid_id;

const SearchBar = () => {
    const [data, setData]=useState(null);

    const getData = (event) => {
        setData(event.target.value);
        bid_id = event.target.value;
    }
    const handleSubmit = (event) => {
        loadData(bid_id);
        console.log(result);
        alert(`${result}`);
    }

    return (
        <div>
            <div className="searchbar-wrapper">
                <input className="input" type="text" onChange={getData} placeholder="Search for a Medicare Advantage Plan with a bid ID"/>
            </div>
            <div className="search-button-wrapper">
                <button onClick={handleSubmit} className="search-button" type="submit">Search</button>
            </div>
        </div>
    )
}
export default SearchBar;
export { bid_id };