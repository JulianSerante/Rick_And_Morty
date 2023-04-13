import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'c56539222d95.9d1744d60d284cf1fa00';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({})
    }, [id]);
    

    return(
        <div className={style.detail}>
            <h2 className={style.detailName}>{character?.name}</h2>
            <p>Status: {character?.status}</p>
            <p>Specie: {character?.species}</p>
            <p>Gender: {character?.gender}</p>
            <p>Origin: {character?.origin?.name}</p>
            <img className={style.detailImg} src = {character?.image} alt = {character?.name} />
        </div>
    )
}

export default Detail;