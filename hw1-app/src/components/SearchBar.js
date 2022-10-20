import React from 'react'

let SearchBar = (props) => 
    <div className="wrap">
        <div className="main">
            <div className="search">
                <input type="search" className="searchTerm" id="mySearch" placeholder="React search.."/>
                <button className="searchButton">{props.Name}</button>
            </div>
        </div>
    </div>


export default SearchBar