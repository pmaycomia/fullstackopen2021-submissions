import React, { useState } from 'react'



const ShowContact = (props) => {
  {/* const toShow = props.persons.filter(contact =>  
    contact.name.toLowerCase().includes(props.filter.toLowerCase())
  ) */}
  
  return (
    <div>
    {props.name} {props.number}
    </div>
  )
  
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = ('')

  

  const addContact = (event) => {
    event.preventDefault()   
     
    const phonebookObject = {
      name: newName,  
      number: newNumber       
    }

    
    if (persons.map(n => n.name === newName).includes(true)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(phonebookObject))
      setNewName('')  
      setNewNumber('')    
  
    }  
        
  }

  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)    
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input value={newFilter} onChange={handleFilterChange} />
        <div>debug: {newFilter} </div>
      </div>

      <h3>add a new contact</h3>
      <form onSubmit={addContact}>
     
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(n => 
          <ShowContact key={n.id} name={n.name} number={n.number} persons={persons} /> )}     
    </div>
  )
}

export default App