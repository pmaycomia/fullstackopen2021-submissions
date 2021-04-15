import React, { useState } from 'react'
import FilteredContacts from './components/FilteredContacts'
import AddNewContact from './components/AddNewContact'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  

  const addContact = (e) => {
    e.preventDefault()   
     
    const phonebookObject = {
      name: newName,  
      number: newNumber,
      id : persons.length     
    }
    
    if (persons.map(n => n.name === newName).includes(true)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(phonebookObject))
      setNewName('')  
      setNewNumber('')   
    }         
  }



  const handleNameChange = (e) => setNewName(e.target.value)
  

  const handleNumChange = (e) => setNewNumber(e.target.value)

  const handleFilterChange = (e) => setNewFilter(e.target.value)

  return (
    <div>
      <h2>PHONEBOOK</h2>
      <SearchFilter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      

      <h3>Add a New Contact</h3>
      <AddNewContact addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumChange={handleNumChange} />

      <h3>Numbers</h3>
      <FilteredContacts persons={persons} newFilter={newFilter} />

         
    </div>
  )
}

export default App