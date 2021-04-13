import React from 'react'
import ShowContact from './ShowContact'



const FilteredContacts = ({ persons, newFilter }) => {
    return(
        <div>
            {persons.filter(person => person.name
            .toLowerCase()
            .includes(newFilter))
            .map(n => 
            <ShowContact 
            key={n.id} 
            name={n.name} 
            number={n.number} 
            /> )}
        
        </div>
    )
}


export default FilteredContacts 