import { getApi } from "../helpers/consumoApi";
import {imgItems} from '../conponents/imgItems';
import { useState, useEffect } from "react";

const pintadoImg =(valor)=>{
    const[infoApi,setInfoApi]=useState([])
    useEffect(()=>{
        getApi(valor).then((newImages=>setInfoApi(newImages.hits)));
    },[valor]);
    
    return(
        <div>
            {
                infoApi.map((img)=>{
                return <imgItems/>
            })
            }
        </div>

    )
}