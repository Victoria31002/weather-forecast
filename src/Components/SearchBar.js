import React from "react";

function SearchBar() {
    return (
        <div className={"search-bar"}>
            <input
                className={'input search-bar__input'}
                type="text"
                placeholder="Search location"
            />
        </div>
    )
}

export default SearchBar