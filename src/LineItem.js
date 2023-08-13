import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" onDoubleClick={() => handleCheck(item.id)}>
        <input 
            type="checkbox" 
            onChange={() => handleCheck(item.id)} 
            checked={item.checked} 
        />

        <label 
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
        >
            {item.item}
        </label>
        
        <FaTrashAlt 
                    className="icon" 
                    role="button" 
                    tabIndex="0" 
                    onClick={() => handleDelete(item.id)} 
                    aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem