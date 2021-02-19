import React from "react"
import { Router, Switch, Route } from 'react-router-dom'
import Index from "pages/index"
import { history } from "helpers/history"
import IndexUser from "pages/user"
import IndexIdUser from "pages/user/[id]"

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Index}
                />
                <Route
                    exact
                    path="/users"
                    component={IndexUser}
                />
                <Route
                    exact
                    path="/user/:id"
                    component={IndexIdUser}
                />
            </Switch>
        </Router>
    )
}
