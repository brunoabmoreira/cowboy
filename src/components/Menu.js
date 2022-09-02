import React from "react";
import style from './Menu.css'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
            <div id="menu">
                <Link to="/"><button className="botaoMenu">Home</button></Link>
                <Link to="/Videos"><button className="botaoMenu">Vídeos</button></Link>
                <Link to="/HistoriaFilmagens"><button className="botaoMenu">História Filmagens</button></Link>
                <Link to="/HistoriaCowboy"><button className="botaoMenu">História Cowboy</button></Link>
                <Link to="/Musicas"><button className="botaoMenu">Músicas</button></Link>
            </div>  
    )
}