import React from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
      {
        items.length ? (
          <div>
            <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
            />
          </div>
        ) : (
          <p>No Items</p>
        )
      }
    </main>
  )
}

export default Content