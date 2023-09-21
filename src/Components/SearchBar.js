import React from "react";

function SearchBar() {
    return (
        <div className={"search-bar"}>
            <input
                className={'input'}
                type="text"
                placeholder="Search location"
            />
        </div>
    )
}

export default SearchBar