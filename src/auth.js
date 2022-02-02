import react from "react";

import { Route, Redirect } from "react-router-dom";

// verificar se o usuario esta autenticado (SIMPLES)
const isAuth = () => {
    if(localStorage.getItem('token') !== null){
        return true
    }
    return false;
}

// redirecionar o usuario caso ele esteja autenticado ou não

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => 
            isAuth() ? (
                <Component {...props} />
            ): (
                <Redirect 
                    to={{
                        pathname: '/',
                        state: { message: 'Usuário não autorizado' }
                    }}
                />
            )}
        />
    );
}

export default PrivateRoute;