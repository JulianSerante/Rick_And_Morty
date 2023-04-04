import style from './Card.module.css';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (

      <div className = {style.container}>
         
         <img className = {style.photo} src={image} alt='' />
         <div className = {style.texto}>
         <h2> Nombre: {name} </h2>
         <h2> Status: {status} </h2>
         <h2> Especie: {species} </h2>
         <h2> Género: {gender} </h2>
         <h2> Origen: {origin} </h2>
         <button className = {style.boton} onClick={() => onClose(id)}>X</button>
         </div>

      </div>
   );
}
