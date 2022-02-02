import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Tarefas from './components/pages/Tarefas';
import EsqueciMinhaSenha from './components/pages/EsqueciMinhaSenha';


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/tarefas' component={Tarefas}/>
            <Route exact path='/cadastro' component={Cadastro}/>
            <Route exact path='/esqueciMinhaSenha' component={EsqueciMinhaSenha}/>
        </Switch>
    </Router>
);

export default Routes;