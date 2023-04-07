import style from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (

      <div className = {style.container}>
         
         <button className = {style.boton} onClick={() => onClose(id)}>X</button>
         <NavLink  to = {`/detail/${id}`}>
            <h1 className={style.nameLink}> {name} </h1>
         </NavLink>

         <img className = {style.photo} src={image} alt='' />
         
         <div className = {style.texto}>
            <h2> Status: {status} </h2>
            <h2> Especie: {species} </h2>
            <h2> Género: {gender} </h2>
            <h2> Origen: {origin} </h2>
         </div>

      </div>
   );
}
