import React from 'react'

const SearchFilter = (props) => {
    return (
        <div>
        search for name: <input value={props.newFilter} onChange={props.handleFilterChange} />
        </div>
    )
}

export default SearchFilter