import { useState } from "react";
import '../../src/App.css'

const Git= ()=>{

    const [search,setSearch]= useState("");
    const [user,setUser]=useState({});
    const fetchUser =async()=>{
    
    try{
        const response = await fetch (`https://api.github.com/users/${search}`)
        const data = await response.json();
        
        setUser(data)
        
    }catch(error){
        console.log("error").error.message
    }
}

    return(
        <div className="App">
            <div className="container">
                <h1>Buscador Github</h1>
                <div className="grid">
                    <input type="text" placeholder="ingresa usuarios" onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div>
                    <button className="btn" onClick={fetchUser}>Buscar</button>
                </div>
                <article>
                    <div>
                        <img src={user.avatar_url} alt="" />
                        <h4>UserName{user.login}</h4>
                        <p>Bio{user.bio}</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Git;