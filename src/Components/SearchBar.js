import React from "react";
import Logo from "../img/Logo.svg"

function SearchBar() {
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <img src={Logo} alt={"logo"}/>
            </div>
            <div className={"search-bar"}>
                <input
                    className={'input'}
                    type="text"
                    placeholder="Buscar local"
                />
            </div>
        </div>
    )

}

export default SearchBar