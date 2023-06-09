import Card from "../Card/Card";
import style from './Favorites.module.css';
import { filterCards, orderCards, /*reset*/ } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Favorites = () => {
    const {myFavorites} = useSelector((state => state))
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        event.preventDefault()
        dispatch(orderCards(event.target.value))
        setAux(true);

    }

    const handleFilter = (event) => {
        event.preventDefault()
        dispatch(filterCards(event.target.value))
    }

// const resetButton = () => {
//     dispatch(reset())
// }

    return(
        <>
            <select name="order" id="" className={style.selectores} onChange={handleOrder} defaultValue={'DEFAULT'}>
                <option value="DEFAULT">Ordenar</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select name="gender" id="" className={style.selectores} onChange={handleFilter} defaultValue={'DEFAULT'}>
                <option value="allCharacters">All Characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        {/* <button onClick={resetButton}>Reset</button> (Botón Reset (hace lo mismo que all characters)) */}

            <div className={style.favorites}>
            {
                myFavorites.map(({id, name, status, species, gender, origin, image}) => {
                 return (
                    <Card 
                        key = {id}
                        id = {id}
                        name = {name}
                        status = {status}
                        species = {species}
                        gender = {gender}
                        origin = {origin.name}
                        image = {image}
                    />
             )
            })
            }
            </div>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites,
//     }
// }

export default Favorites;