import styles from './Home.css'
import Menu from './Menu'
import {Link} from 'react-router-dom'
import Cowboy from '../imagens/cowboy.png'

export default function Home() {
    return (
        
        <div id="home">
            <Menu />
            <div id='conteudoHome'>
                <div id='cowboy'> <img src={Cowboy}></img></div>
                <div id="textoHome">
                    <h1>
                        Afonso Moreira, O Cowboy
                    </h1>
                    <p>
                        Site dedicado à obra e algumas realizações do meu pai, objetivando tornar eterno os seus registros filmográficos, as suas músicas e poesias, a sua história e tudo que for possível juntar de registros da família, amigos, passeios, eventos, e etc..
                    </p>
                    <br></br>
                    <p>
                        O objetivo é tornar esse espaço um acervo de vídeos, fotos e documentos históricos.<br/>
                        Um espaço nostálgico, constantemente alimentado e atualizado, até que todas as histórias que mereçam
                        serem ouvidas ou lidas estejam finalmente exauridas.
                    </p>
                    <br></br>
                    <p>
                        Tudo isso para servir de homenagem ao velho Cowboy, a sua obra e aos seus feitos.
                    </p>
                </div>
            </div>
           
        </div>
    )
}