import React from 'react';
import "./style.css";

import {Link} from "react-router-dom";

function PlayListMusic() {
    return (
        <div>
            <Link to="/">
                <div className="btnVoltar">
                    <button> voltar </button> 
                </div>
            </Link>

            registre suas musicas
            
            <button>addMusicToList</button>
            
        </div>
    )
}

export default PlayListMusic;
