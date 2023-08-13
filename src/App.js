import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import { useEffect } from 'react';
import { useState } from 'react';
import './index.css'

function App() {

  const[items, setItems] = useState(JSON.parse(localStorage.getItem('groceryList')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('groceryList', JSON.stringify(newItems));
  }
  
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const itemsList = items.map(
      (item) => item.id === id ? {...item, checked: !item.checked} : item
    );
    setAndSaveItems(itemsList);
  }

  const handleDelete = (id) => {
    const itemsList = items.filter(
      (item) => item.id !== id
    );
    setAndSaveItems(itemsList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div>
      <Header title="Grocery List"/>
      <AddItem 
              newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
      />
      <SearchItem 
              search={search}
              setSearch={setSearch}
      />
      <Content 
              items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
              handleCheck={handleCheck} 
              handleDelete={handleDelete} 
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
