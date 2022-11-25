import './App.css';
import Categories from './Categories';
import Menu from './Menu';
import data from "./data";
import { useState } from 'react';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {

  const [items, setItems] = useState(data);
  const [categories, setCategory] = useState(allCategories);

  const filterItems = (category) =>{
    if (category === 'all') {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
