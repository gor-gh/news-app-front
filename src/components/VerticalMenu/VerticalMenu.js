import React from "react";
import './VerticalMenu.css';
import PropTypes from 'prop-types';
import CategoriesList from "../CategoriesList/CategoriesList";
import SearchPanel from "../SearchPanel/SearchPanel";
import ContactUs from "../ContactUs/ContactUs";
import {Link} from "react-router-dom";

const VerticalMenu = (props) => {
    const categories = ['covid-19', 'political', 'sport', 'art'];
    return (
        <div
            className={`vertical_menu d-flex justify-content-around align-items-center flex-direction-column ${props.show ? 'showMenu' : ''}`}>
            <i
                onClick={props.closeModal}
                className="fa fa-angle-double-right close_arrow" ></i>
            <CategoriesList
                direction='column'
                categories={categories}
                closeMenu={props.closeModal}
            />
            <SearchPanel
                placeholder='Search...'
                onSearch={props.onSearch}
                searchResults={props.searchResults}
            />
            <ContactUs />
            <div className=''>
                {
                    props.isLoggedIn ? (
                        <Link
                            onClick={props.loggedOut}
                            className='btn logout_button'
                            to='/logout'
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link

                            className='btn logout_button'
                            to='/login'
                        >
                            Login
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
VerticalMenu.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired,
    loggedOut: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}
export default VerticalMenu;
