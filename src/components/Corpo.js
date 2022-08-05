import styles from './Corpo.css'
import React, { useEffect, useState } from "react";

function Corpo() {
    var listaGrande = [];
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [numeroDeItensPorPagina, setNumeroDeItensPorPagina] = useState(3);
    const indexDoUltimoItem = paginaAtual * numeroDeItensPorPagina;
    const indexDoPrimeiroItem = indexDoUltimoItem - numeroDeItensPorPagina;
    const itensExibidosNaPaginaAtual = listaGrande.slice(indexDoPrimeiroItem, indexDoUltimoItem);
    var numeroDePaginas = 0;
    var numerosDaPaginacao = 0;

    function iniciar() {
    const toHtml = document.getElementsByTagName("iframe");
    const toArray = [...toHtml];
    listaGrande = toArray.map((dados) => dados);
    numeroDePaginas = Math.ceil(listaGrande.length / numeroDeItensPorPagina);
    numerosDaPaginacao = [...Array(numeroDePaginas + 1).keys()].slice(1);
    }
   
    useEffect(() => iniciar(), []);

    function testar() {
        console.log(numeroDePaginas);
        console.log(indexDoPrimeiroItem);
        console.log(indexDoUltimoItem);
        console.log(paginaAtual);
        console.log(numeroDeItensPorPagina);
        console.log(numerosDaPaginacao);
    }

    return (
        <div id="corpo">
            
            <div className='teste'>
                <button onClick={() => testar()}>Iniciar Teste</button>
            </div>
            <div id="iframes">
                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/Bkv6fi5KsN8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/QkyfXrNpKCU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/lV3eeQzXpZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/X8oVCB2fRFk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/SLxIqYU0jfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/hvgd8Xo-C9U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/Vb8mvW83P2s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/Wi8ML46Nyz4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/mrh4BzTJUhA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/9UUTdKQ0s5A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/8BB1v5w4BVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/K-qA5kBw95o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/8AeeX_TBtWo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/NjezjxGP91A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/ft_GNHNkbxY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/VKaN80utyP4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/Y9bylHK-sYs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/aM4xiMzNlBE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/AwTtr8Q1uAc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/31Xt7gokBok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/opYGTOC9G_w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/zKdDBF8ETZc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/Jn9TWANKCkg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/bP9P1xJuU0I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/vwF9MhHpM3w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/eIvMrQJcwDI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/xoqWLqsYeug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <iframe id="frame" width="300" height="170" src="https://www.youtube.com/embed/NACUiQQRmJw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
            <div className='rodrigao'>
                <div>
                    {itensExibidosNaPaginaAtual.map((item) => (
                        <div key={item}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <nav>
                    <ul>
                        {numerosDaPaginacao.map((pagina) => (
                            <li key={pagina}>
                                <a href="#" onClick={() => setPaginaAtual(pagina)}>
                                    {pagina}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Corpo;