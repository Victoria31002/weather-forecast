import React from "react";
import Select from "react-select";


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px solid rgba(30, 30, 41, 1)",
        padding: 16,
        backgroundColor: 'var(--bg-color-gray500);',
        borderRadius: '8px',
        color: 'var( --text-color-gray100);',
        cursor: 'pointer;',

    }),
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'var(--bg-color-gray600);',
        border: 'none;',
        padding: '10px 15px;',
        borderRadius: '8px;',
        cursor: 'pointer;',
        boxShadow: 'none;',


    }),

    menu: (provided, state) => ({
        ...provided,
        background: 'none',
        borderRadius: '8px'

    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: 'var((--text-color-gray100))',

    }),
    input: (provided, state) => ({
        ...provided,
        color: 'var((--text-color-gray100))',

    })
};


const DropdownIndicator = () => null;

function SearchBar({cities}) {
    const options = cities.map((city) => ({
        value: city,
        label: city,
    }));

    const onCitySelect = (city) =>{
        console.log(city)
    }

    return (
        <div className="search-bar">
            <Select onChange={onCitySelect} options={options} styles={customStyles} placeholder={'Search location'}
                    components={{DropdownIndicator}} maxMenuHeight={289}/>
        </div>
    );
}

export default SearchBar;