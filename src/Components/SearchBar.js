import React, {useState} from "react";
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
    }),

};


function SearchBar({cities, onCityChange, isLoading}) {
    const [selectedCity, setSelectedCity] = useState(null);
    const options = cities.map((city) => ({
        value: city,
        label: city,
    }));

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        if (selectedOption) {
            const city = selectedOption.value;
            onCityChange(city);
        }
    };

    return (
        <div className={'search-bar'}>
            <Select
                value={selectedCity}
                onChange={handleCityChange}
                options={options}
                styles={customStyles}
                placeholder={"Search location"}
                maxMenuHeight={289}
                isLoading={isLoading}
            />
        </div>
    );
}

export default SearchBar;