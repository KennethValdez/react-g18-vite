import { useState } from "react"
import { pintadooImg} from "./pintadoImg"

const inputImg =()=>{
const {valorInput,setValorInput}=useState("")
const captura = (e)=>{
    e.preventDefault()
    const input = document.querySelector('input');
    setValorInput(input.value)
}


    return(
        <div>
            <form action="">
                <input type="text" />
                <button onClick={captura}>BUSCAR</button>
            </form>
            <pintadooImg/>
        </div>
    )
}

export default inputImg