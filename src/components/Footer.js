import React from "react";
import style from "./Footer.css"
import Instagram from '../imagens/instagram.png'
import Linkedln from '../imagens/linkedln.png'
import Git from '../imagens/git.png'

export default function Footer() {
    return (
        <div id="footer">
            <div id="links"><img src={Instagram} /></div>
            <div id="textolink"><a href="https://www.instagram.com/brunoabmoreira/" target={'_blank'}>@brunoabmoreira</a></div>
            <div id="links"><img src={Linkedln} /></div>
            <div id="textolink"><a href="https://www.linkedin.com/in/brunoabmoreira/" target={'_blank'}>in/brunoabmoreira/</a></div>
            <div id="links"><img src={Git} /></div>
            <div id="textolink"><a href="https://github.com/brunoabmoreira" target={'_blank'}>github.com/brunoabmoreira</a></div>
        </div>
    )
}