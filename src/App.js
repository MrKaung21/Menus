import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category
))]

function App() {
  const [menus, setMenus] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  
  const filterMenus = (category) => {
    if(category === 'all') {
      setMenus(items)
      return
    }
    const newMenus = items.filter(item => item.category === category)
    setMenus(newMenus)
  } 

  return (
    <main>
      <section className='menu section'>
          <div className='title'>
              <h2>Our Menu</h2>
              <div className='underline'></div>
          </div>
          <Categories categories={categories} filterMenus={filterMenus} />
          <Menu items={menus} />
      </section>
    </main>
  )
}

export default App;
