import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import Git from "../gitSearch/Git";
import Ejemplo from "../Ejemplo";
import Home from "../pages/pokemon";
import Footer from "../Footer";
import Flags from "../pages/Flags";
import principalImg from "../imagenes-pixabay/components/inputImg";


const Router =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/Flags" element={<Flags/>}/>
                <Route path="/Git" element={<Git/>}/>
                <Route path="/ejemplo" element={<Ejemplo/>}/>
                <Route path="/footer" element={<Footer/>}/>
                <Route path="/imagen" element={<principalImg/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;