import React from 'react';
import {Redirect} from 'react-router-dom';
import {client} from '../Client';

const Logout = (props) => {
    client.logout();
    return (
        <Redirect to='/login' />
    )
}

export default Logout;