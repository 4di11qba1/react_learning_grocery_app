import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem" style={{display: 'none'}}>Add Item</label>
        <input 
            className="inputField" 
            autoFocus
            ref={inputRef} 
            id="addItem" 
            placeholder="Add Item" 
            type="text" required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} 
        />
        <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}><FaPlus className="icon" /></button>
    </form>
  )
}

export default AddItem