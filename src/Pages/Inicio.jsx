import React from "react";
import NavLogin from '../components/Inicio-Nav/Inicio-nav.jsx'
import InicioBnv from '../components/Inicio-Bnv/Inicio-bnv.jsx'
import { BrowserRouter as Router} from 'react-router-dom';


function InicioPage(){
    return(
        <>
            <div>
                <NavLogin></NavLogin>
                <InicioBnv></InicioBnv>
            </div>
        
        </>
    )
}

export default InicioPage