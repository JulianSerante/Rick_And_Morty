import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   
   const handleChange = (event) => {
      setId(event.target.value); 

   }
   return (
      <div className = {style.searchbarContainer}>
         <input onChange = {handleChange} className = {style.inputSearch} type='search' value = {id} />
         <button className = {style.agregar} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
