import styles from './Corpo.css'
import Menu from './Menu'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Alerta from './Alerta'

function Corpo() {
  const listaGrande = [
    'f5IYaSuySaI',
    'CA7TmeSqoSg',
    'EM70c7uaMhU',
    'BycQPPeAu-U',
    'unIBgd_-HTw',
    'DotTUItv9Ao',
    'QkyfXrNpKCU',
    'lV3eeQzXpZI',
    'X8oVCB2fRFk',
    'SLxIqYU0jfk',
    'hvgd8Xo-C9U',
    '8BB1v5w4BVg',
    '9UUTdKQ0s5A',
    'mrh4BzTJUhA',
    'Wi8ML46Nyz4',
    'Vb8mvW83P2s',
    'Y9bylHK-sYs',
    'VKaN80utyP4',
    'ft_GNHNkbxY',
    'NjezjxGP91A',
    '8AeeX_TBtWo',
    'K-qA5kBw95o',
    'zKdDBF8ETZc',
    'opYGTOC9G_w',
    '31Xt7gokBok',
    'AwTtr8Q1uAc',
    'aM4xiMzNlBE',
    'NACUiQQRmJw',
    'xoqWLqsYeug',
    'eIvMrQJcwDI',
    'vwF9MhHpM3w',
    'bP9P1xJuU0I',
    'Jn9TWANKCkg',
    'FBptlH53x78',
    'eubEftjftKw',
    'PZADcQbZva0',
    'U27_HkApq1E',
    's512tXMgq2E',
    'BfRmbWzJ4Eg',
    'unk4RkQKUX8',
    'z3wiz-Zs6BQ',
    'K6n1cdq5jVc',
    'y7-ttOU3naw',
    'EXCQq9KxTlo',
    'HeyNT_pGlTQ',
    'IZXO01kGMvo',
    '22qjN04K82E',
    'yjcaWeYm_8Y',
    'yQUR9r1CT8k',
    'RAOQzbokpiA',
    '4tOqc13z3pQ',
    'm-KqJyUlVdM',
    'ApRg_89syz4',
    'MWNRczrDD8U',
    'O8TbZ66zMyY',
    'A4_CT7vdTMM',
    'mKQFoYPZ5KM',
    'c4ER2weVWC8',
    'XEAjJj_mNQE',
    'jD5FjQD3uqs',
    'HlorGrujCXA',
    'cxmzjR1Nrh0',
    'pX_jBkUweI8',
    'Ywu55zsApsc',
    'IkVu1PBulmM',
    'ud0IqCc01r4',
    '8gwafxeBSbQ',
    '4NIh3W2lGGo',
  ];
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [numeroDeItensPorPagina] = useState(12);
  const indexDoUltimoItem = paginaAtual * numeroDeItensPorPagina;
  const indexDoPrimeiroItem = indexDoUltimoItem - numeroDeItensPorPagina;
  const itensExibidosNaPaginaAtual = listaGrande.slice(
    indexDoPrimeiroItem,
    indexDoUltimoItem
  );
  const numeroDePaginas = Math.ceil(
    listaGrande.length / numeroDeItensPorPagina
  );
  const numerosDaPaginacao = [...Array(numeroDePaginas + 1).keys()].slice(1);

  return (
    <div id="corpo">
      <Menu />
      <Alerta />
        <div id="container">
          {itensExibidosNaPaginaAtual.map((item) => (
            <div id="guardaFrame" key={item}>
              <iframe
                id="iframe"
                width="230"
                height="140"
                src={`https://www.youtube.com/embed/${item}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="mt-4"
                allowFullScreen
              />
            </div>
          ))}
        </div>
          <div className="paginas">
            {numerosDaPaginacao.map((pagina) => (
              <div id="lista" key={pagina}>
                <a href="#" onClick={() => setPaginaAtual(pagina)}>
                 <button className='button'>{pagina}</button>
                </a>
              </div>
            ))}
          </div>
    </div>
  );
}

export default Corpo;