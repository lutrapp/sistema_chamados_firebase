// para importar 1 componente por página
import { Switch } from "react-router-dom";
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes(){
    return (
        <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        </Switch>
    )
};