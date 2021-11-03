import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Blocks from './pages/Blocks/Blocks';
import Index from './pages/Index/Index'
import Cards from './pages/Cards/Cards'
import Forms from './pages/Forms/Forms'
import Pricing from './pages/Pricing/Pricing'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/index" component={Index} />
            <Route path="/blocks" component={Blocks} />
            <Route path="/cards" component={Cards} />
            <Route path="/forms" component={Forms} />
            <Route path="/pricing" component={Pricing} />
        </Switch>
    )
}

