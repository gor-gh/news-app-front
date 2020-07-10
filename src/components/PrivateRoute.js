import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {client} from '../Client';

const PrivateRoute = ({component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                client.isLoggedIn() ? (
                    React.createElement(component, props)
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state:{from: props.location}
                        }}
                    />
                )
            )}
        />
    )
}

export default PrivateRoute;