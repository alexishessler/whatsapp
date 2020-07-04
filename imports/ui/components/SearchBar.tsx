import React from 'react';
import StyledSearchBar from '../elements/StyledSearchBar';
// import StyledAvatar from '../elements/StyledAvatar';
import FontAwesome from "react-fontawesome";


const SearchBar= (props:any):JSX.Element => {
    return(
        <StyledSearchBar>
            <label className="searchbar--label">
                <FontAwesome
                    size="2x"
                    name="search"
                    className="searchbar--icon"
                />
                <input 
                    type="text" 
                    placeholder="Rechercher ou Démarrer une discussion"
                    className="searchbar--input"/>
            </label>
        </StyledSearchBar>
    )
}



export default SearchBar;