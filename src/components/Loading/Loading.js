import React from 'react';
import './Loading.css';
import PropTypes from 'prop-types';



const Loading = (props) => {
    return (
        <div className={`lds-ripple ${props.velocity}`}>
            <div></div>
            <div></div>
        </div>
    )
}
Loading.propTypes = {
    velocity: PropTypes.string.isRequired
}

export default Loading;