import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      } else {
         setIsFav(true);
         addFav({
            id, 
            name, 
            status, 
            species, 
            gender, 
            origin, 
            image, 
         });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   
   return (

      
      <div className = {style.container}>
         
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button className = {style.boton} onClick={() => onClose(id)}>X</button>

         <div className={style.textImage}>

         <NavLink  to = {`/detail/${id}`} className={style.nameLink}>
            <h1 className={style.nameLink}> {name} </h1>
         </NavLink>

         <img className = {style.photo} src={image} alt='' />
         
         </div>

         {/* <ul className = {style.lista}>
            <p className={style.text} > Status: {status} </p>
            <p className={style.text}> Especie: {species} </p>
            <p className={style.text}> Género: {gender} </p>
            <p className={style.text}> Origen: {origin} </p>
         </ul> */}

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);