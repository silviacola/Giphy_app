import React from 'react';

// Stateless components, need props
const SearchGifForm = (props) => {
        return (
            <form
            className="search-gif-form"
            onSubmit={props.handleGifSubmit}
            >
            <input
                type='text'
                value={props.inputKeywordValue}
                name='keyword'
                placeholder='What are you looking for?'
                onChange={props.handleInputKeywordChange}
            />
            <br/>
            <input
                type='text'
                value={props.inputLimitValue}
                name='limit'
                placeholder='Max number of results'
                onChange={props.handleInputLimitChange}
            />
            <br/>
            <button type='Submit' value='Search'>Search!</button>
            </form>
        );
    } 


export default SearchGifForm;