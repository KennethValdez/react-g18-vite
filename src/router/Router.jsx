import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../App";
import Git from "../gitSearch/Git";
import Ejemplo from "../Ejemplo";
import Footer from "../Footer"

const Router =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Git" element={<Git/>}/>
                <Route path="/ejemplo" element={<Ejemplo/>}/>
                <Route path="/footer" element={<Footer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;