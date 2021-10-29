import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./pages/home/Home";
import PlayListReg from "./pages/registros/registro playlist/PlayListReg";
import PlayListMusic from "./pages/registros/registro Music/PlayListMusic";

function routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/regplaylist" exact component={PlayListReg} />
                <Route path="/playlistmusic" exact component={PlayListMusic} />
            </Switch>
        </Router>
    )
}

export default routes
