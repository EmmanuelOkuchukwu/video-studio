import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('currentUser')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/' }}/>
    )} />
);
