

const Form = () => {
    return(
        <form>
            <h1>BIENVENIDO A LA APP DE RICK & MORTY</h1>
            <h2>Inicia sesión para ingresar</h2>
            <label htmlFor="email">Email: </label>
            <input type="email" />
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="text" />
            <br />
            <br />
            <button>Submit</button>
            


        </form>
    )
}

export default Form;