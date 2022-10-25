import React, { useState, useEffect } from "react";


const Search = (props) => {
    const [searchText, setSearchText] = useState('');

    const handelChange = (e) => {
        setSearchText(e.target.value);
        
    }

    useEffect(() => {
        props.onSearchCountry(searchText);
    }, [searchText]);

    return(
        <div>
            <input type="text" placeholder="Enter Country name...." value={searchText} 
            onChange={handelChange}
            />
        </div>

    );
}

export default Search;