import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import LatestNewsList from "../LatestNewsList/LatestNewsList";


const HomePage = (props)  => {

    return (
        <div className='home_container pb-4'>
            <LatestNewsList newses={props.newses} />
        </div>
    );
}
HomePage.propTypes = {
    newses: PropTypes.array.isRequired
}

export default HomePage;