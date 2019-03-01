import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../container/layout';
import Tiaozhuan from '../container/tiaozhuan';

export default class Nav extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/a" exact component={Layout} />
                    <Route path="/tiaozhuan/:id1/:id2" exact component={Tiaozhuan} />
                </Switch>
            </HashRouter>
        )
    }
}