import React from 'react';
import './style.css';

import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1> pagina home </h1>
            <Link to="/regplaylist">
                <button> crie uma playlist </button> 
            </Link>

            <h2>Playlists</h2>
            <Link to="/playlistmusic">
                <button> eletronica </button> 
            </Link>

        </div>
    )
}

export default Home
