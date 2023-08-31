import { useState } from 'react';
import './App.css';
import Menu from './Components/Menu';
import items from "./Components/restaurants.json"

function App() {
  const [menuItems,setMenuItems] = useState(items)
  return (
    <div className="container">
    <Menu items = {menuItems}/>
    </div>
  );
}

export default App;
