import React, { useState } from 'react'
import ShowContact from './component/ShowContact'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  

  const addContact = (e) => {
    e.preventDefault()   
     
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



  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)    
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        search for person: <input value={newFilter} onChange={handleFilterChange} />
        <div>debug: {newName} {newFilter} </div>
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
      
      {persons.filter(person => person.name.toLowerCase().includes(newFilter))
      .map(n => 
          <ShowContact key={n.id} name={n.name} number={n.number} persons={persons}        
          /> )}     
    </div>
  )
}

export default App