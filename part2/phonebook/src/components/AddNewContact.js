import React from 'react'    

const AddNewContact = (props) => {
    return (
        <form onSubmit={props.addContact}>
     
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
          <br />
          number: <input value={props.newNumber} onChange={props.handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
    
    
    


export default AddNewContact