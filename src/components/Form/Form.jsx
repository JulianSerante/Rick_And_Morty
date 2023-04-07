import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css'


const Form = ({Login}) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value
        
        setUserData({
            ...userData, 
            [property]: value
        }) 

        setErrors(
            validation({
                ...userData,
                [property]: value
            })
        )

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        Login(userData)
    }
    
    

    return(
        <div>
        <form onSubmit={handleSubmit} className={style.form} >
            <h1>BIENVENIDO A LA APP DE</h1>
            <img src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-519.gif" alt="" />
            <p className = {style.iniciaSesion} >Inicia sesión para ingresar</p>
            <label htmlFor="username">Email: </label>
            <input className = {style.inputForm} name="username" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange}/>
            {errors.username && <h5>{errors.username}</h5>}
            <br />
            <label htmlFor="password">Password: </label>
            <input className = {style.inputForm} name="password" type="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} />
            {errors.password && <h5>{errors.password}</h5>}
            <br />
            <br />
            <button className = {style.ingresarButton}> Ingresar </button>
          
        </form>
        </div>
    )
}

export default Form;