import React from 'react';
import "./style.css";

import {Link} from "react-router-dom";


function PlayListReg() {
    return (
        <div>
            <Link to="/">
                <div className="btnVoltar">
                    <button> voltar </button> 
                </div>
            </Link>
            <h1> registre a playlist aqui</h1>

            <div className="formPlayListName">
                <label>Nome da Playlist</label>
                <input type="text" />
            </div>

            <div className="TablePlayListName">
                <table>
                    <thead>
                        <tr>
                            <th>playlist name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>eletronica </td>
                        </tr>
                        <tr>
                            <td>funk </td>
                        </tr>
                        <tr>
                            <td>raps </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PlayListReg;
