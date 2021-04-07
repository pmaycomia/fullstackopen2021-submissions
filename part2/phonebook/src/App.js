import React, { useState } from 'react'



const ShowPerson = (props) => {
  return (
    <div>
    {props.name}
    </div>
  )
  
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'}
  ]) 

  const [ newName, setNewName ] = useState('')

  

  const addName = (event) => {
    event.preventDefault()   
        
    

    const phonebookObject = {
      name: newName         
    }
    const isNameTaken = persons.map(n => n.name === newName)
    if (isNameTaken.includes(true)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(phonebookObject))
      setNewName('')      
      console.log(isNameTaken);
    }  
        
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
     
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(list => 
          <ShowPerson key={list.id} name={list.name} /> )}



     
    </div>
  )
}

export default App