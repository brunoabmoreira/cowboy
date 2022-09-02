import React from "react";
import style from "./Alerta.css"
import RemindOutlineIcon from '@rsuite/icons/RemindOutline';

export default function Alerta() {
    return (
        <div id="alerta">
            <p>
            <RemindOutlineIcon fontSize={'30px'} color='black'/>
             Os vídeos dessa sessão estão dispostos em seu formato integral, não possuem cortes, exclusão de pessoas, ou qualquer edição que tenha por objetivo eliminar parte do conteúdo, apenas edições feitas com o intuito de tornar os vídeos mais divertidos.
            </p>
        </div>
    )
}