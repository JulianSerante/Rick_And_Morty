import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'c56539222d95.9d1744d60d284cf1fa00';


function App() {
   
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate()

   const [access, setAccess] = useState(false)
   const email = 'julian.serante@gmail.com'
   const password = 'pass2000'

   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }

   const onClose = (id) => {
      setCharacters((oldChars) => {
         return oldChars.filter((character) => character.id !== id)
      });
   }

   const { pathname } = useLocation()

   const login = (userData) => {
      if(userData.username === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      } else {
         alert('Email o contraseña incorrecta')
      }
   }

   return (
      <>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
         <Route path = '/' element = {<Form Login = {login} />} />
         <Route 
         path = "/home" 
         element = {<Cards onClose={onClose} characters={characters} />} 
         />
         <Route 
         path = '/about' 
         element = {<About />} />
         <Route 
         path = '/detail/:id'
         element = {<Detail />}
         />
      </Routes>
      
      </>
   );
}

export default App;

