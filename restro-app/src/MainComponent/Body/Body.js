import React from 'react';
import Menu from './Menu';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/h" exact component={Home} />
                <Route path="/m" exact component={Menu} />
                <Route path="/a" exact component={About} />
                <Route path="/c" exact component={Contact} />
                <Redirect from="/" to="/h" />
            </Switch>
        </div>
    );
};

export default Body;