import { Route, Switch } from "react-router-dom";
import routes from './routes.js'

import { AppHeader } from "./cmps/app-header";

export function App() {

    return <div className="app main-layout">
        <AppHeader />
        <main>
            <Switch>
                {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
            </Switch>
        </main>
    </div>
}

