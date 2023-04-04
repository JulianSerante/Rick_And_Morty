import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';




function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((char) => char.id === data.id);
            if(exist){
               alert('El personaje ya existe');
            } else {
            setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters((oldChars) => {
         return oldChars.filter((character) => character.id !== id)
      });
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards onClose={onClose} characters={characters} />
      </div>
   );
}

export default App;

