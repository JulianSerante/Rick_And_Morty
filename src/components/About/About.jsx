import style from './About.module.css'

const About = () => {
    return (
        <div className = {style.aboutContainer} >
            <h1 className = {style.tittleProfile}>Este es mi perfil</h1>
            <p className = {style.perfil}> Hola! soy Julián Serante, tengo 22 años y vivo en Villa Rosa, una localidad del partido de Pilar en la provincia de Buenos Aires, Argentina. </p>
            <p className = {style.perfil}> Soy Técnico Universitario en Comercio Exterior y Aduanas recibido en la Universidad Nacional de Luján y tengo intenciones de continuar hasta la Licenciatura en Comercio Internacional. </p>
            <p className = {style.perfil}> Sin embargo, este año decidí, después de pensarlo mucho (ya que tengo que dejar la carrera por un cuatrimestre), ingresar a Henry y adentrarme en el mundo de la programación, un mundo totalmente desconocido para mi. </p>
            <p className = {style.perfil}> Decidí ingresar a Henry por curiosidad, por ganas de aprender algo nuevo y por la salida laboral que la carrera conlleva. </p>
        </div>
    )
}

export default About;