import Card from "../Card/Card";
import { filterCards, orderCards, reset } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Favorites = () => {
    const {myFavorites} = useSelector((state => state))
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        event.preventDefault()
        dispatch(orderCards(event.target.value))

    }

    const handleFilter = (event) => {
        event.preventDefault()
        dispatch(filterCards(event.target.value))
    }

const resetButton = () => {
    dispatch(reset())
}

    return(
        <>
            <select name="order" id="" onChange={handleOrder} defaultValue={'DEFAULT'}>
                <option value="DEFAULT">Ordenar</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

        <select name="gender" id="" onChange={handleFilter} defaultValue={'DEFAULT'}>
            <option value="DEFAULT">Filtrar</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <button onClick={resetButton}>Reset</button>

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
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites,
//     }
// }

export default Favorites;