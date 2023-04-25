import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import style from './App.module.css';



// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'c56539222d95.9d1744d60d284cf1fa00';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate()

   const [access, setAccess] = useState(false);

   const login = async (userData) => {

      try{
         const { username, password } = userData;
         const{ data } = await axios(URL + `?email=${username}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
         
      }  catch(error){
      console.log(error.message);
   }
}

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);


const onSearch = async (id) => {

      try{
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         } 

      } catch(error){
         return alert('¡No hay personajes con este ID!');
}
}

   const onClose = (id) => {
      setCharacters((oldChars) => {
         return oldChars.filter((character) => character.id !== id)
      });
   }


   const { pathname } = useLocation()

   return (
      <>
      { 
      pathname !== '/' && <Nav onSearch={onSearch} setAccess = {setAccess} />}
      <Routes>
         <Route path = '/' element = {<Form Login = {login} />} />
         <Route 
         path = "/home" 
         element = {<Cards onClose={onClose} characters={characters} />}
         className = {style.routeHome} 
         />
         <Route 
         path = '/about' 
         element = {<About />} />
         <Route 
         path = '/detail/:id'
         element = {<Detail />}
         />
         <Route
          path = '/favorites'
          element = {<Favorites/>}
          />
      </Routes>
      
      </>
   );
}


export default App;

