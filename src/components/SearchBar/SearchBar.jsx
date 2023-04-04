import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className = {style.containerSearch}>
         <input onChange = {handleChange} className = {style.input} type='search' value = {id} />
         <button className = {style.agregar} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
