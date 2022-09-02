import React from "react";
import Menu from './Menu'
import style from "./FilmagensHistoria.css"
import Helder from '../imagens/Helder.PNG'
import Sharp from '../imagens/Sharp.PNG'
import VHStoDVD from '../imagens/vhstodvd.jpg'
import Youtube from '../imagens/youtube.png'

export default function Historia() {
    return (
        <div id="scroll">
            <div id="containerHistoria">
                <Menu />
                    <div className="linhas">
                            <div className="textoHistoria">
                                <h1>OS EQUIPAMENTOS</h1>
                                <p>
                                    O primeiro equipamento utilizado na época era uma câmera Filmadora Sharp VL-L170U VHS Camcorder (foto), realizando registros a partide 1994 até o início dos anos 2000.
                                </p>
                                <p>
                                    Após isso houve a aquisição de uma câmera menor, da marca desconhecida, que registrou os videos até 2014
                                </p>
                                <p>
                                    As filmagens mais recentes utilizam uma GoPro Hero 8 e um Drone DJI Spark adquiridos pelo seu filho Bruno.
                                </p> 
                            </div>
                            <div className="fotosHistoria">
                                <img src={Sharp}></img>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="fotosHistoria">
                                <img src={Helder}></img>
                            </div>
                            <div className="textoHistoria">
                                <h1>A AQUISIÇÃO</h1>
                                <p>
                                    O equipamento utilizado foi adquirido na época pelos irmãos Wilton e Boanerges Batista, ambos, na época, funcionários do BEC. Compraram junto ao antigo colega de trabalho Helder (foto), que havia comprado o equipemento no paraguai, na época da abertura econômica.
                                </p>
                                <p>
                                    Após alguns testes e filmagens até então desaparecidas a câmera acabou sendo vendida a Afonso Moreira, que ao longo dos anos realizou vários registros importantes que na sua visão deveriam ser eternizados.
                                </p>
                                <p>
                                    Todas essas filmagens estão disponíveis na sessão "vídeos" desse site.
                                </p>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="textoHistoria">
                                <h1>A TROCA DE MIDIAS</h1>
                                <p>
                                    Após alguns anos Afonso percebeu que suas filmagens em VHS estariam ficando comprometidas por fungos que estavam corroendo as fitas e corrompendo os arquivos, alguns exemplares foram perdidos nessa época.
                                </p>
                                <p>
                                    Pensando nisso ele resolveu à época atualizar a mídia de armazenamento desses arquivos, contratou uma empresa especializada que fez a edição (criação de menus) e migração para a tecnologia dos DVDs.
                                </p>
                            </div>
                            <div className="fotosHistoria">
                                <img src={VHStoDVD}></img>
                            </div>
                    </div>
                    <div className="linhas">
                            <div className="fotosHistoria">
                                <img src={Youtube}></img>
                            </div>
                            <div className="textoHistoria">
                                <h1>A DIGITALIZAÇÃO</h1>
                                <p>
                                    Anos se passaram e Bruno, filho de Afonso, percebeu que os DVDs estavam abandonados, já não existia nenhum aparelho de DVD para realizar a leitura das mídias em sua casa e alguns DVDs estavam comprometidos por arranhões e fungos.
                                </p>
                                <p>
                                    Bruno então e resolveu converter todos os arquivos de imagem ISO para vídeos e realizou o upload no seu canal do YouTube.
                                </p>
                            </div>
                    </div>     
            </div>
        </div>
    )
}