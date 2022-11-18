import { useState } from "react";
import { Link } from "react-router-dom";

const Ejemplo =()=>{

//const nombre = "Kenneth";
//hook useState
const[nombre,setNombre] =useState("David");

const cambiarNombre=(nuevo)=>{
    console.log("hola")
    setNombre(nuevo)
    console.log(nombre,setNombre)
} 

    return(
        <div>
            <h1>Primer componente</h1>
            <p>mi nombre es: <strong className= {nombre.length <=4 ? 'verde' : 'azul'}>{nombre}</strong></p>
            <a href=""><Link>Git</Link></a> 
            <p>mi apellido es: </p>

            <input type="text" placeholder="cambia el nombre" onChange={e=>cambiarNombre(e.target.value)} />

            <button onClick={e=>cambiarNombre("pepe")}>Cambiar nombre</button>
        </div>
    )
}

export default Ejemplo;