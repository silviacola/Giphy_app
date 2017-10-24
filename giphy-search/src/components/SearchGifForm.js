import React from 'react';

// Stateless components, need props
const SearchGifForm = (props) => {
        return (
            <form
            className="search-gif-form"
            onSubmit={props.handleGifSubmit}
            >
            <div className="Gif-form">
                <div className="FieldsWrapper">
                    <div className="Wrapper">
                        <h2 className="Label">What are you looking for?</h2>
                        <input
                            type='text'
                            value={props.inputKeywordValue}
                            name='keyword'
                            placeholder='What are you looking for?'
                            onChange={props.handleInputKeywordChange}
                        />
                    </div>
                        <br/>
                    <div className="Wrapper">
                        <h2 className="Label">Max number of result</h2>
                        <input
                            type='text'
                            value={props.inputLimitValue}
                            name='limit'
                            placeholder='Max number of results'
                            onChange={props.handleInputLimitChange}
                        />
                    </div>
                        <br/>
                    </div>
                    <button type='Submit' value='Search'>Search!</button>
                </div>
            </form>
        );
    } 


export default SearchGifForm;