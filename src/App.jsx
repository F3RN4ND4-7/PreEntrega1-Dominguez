import React from 'react'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import './style.scss';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greetings = "Conoce la nueva colección" />
    </div>
  )
}

export default App