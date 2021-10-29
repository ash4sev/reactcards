import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./pages/home/Home";
import PlayListReg from "./pages/registros/registro playlist/PlayListReg";


function routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/regplaylist" exact component={PlayListReg} />
            </Switch>
        </Router>
    )
}

export default routes
