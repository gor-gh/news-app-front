import React from 'react';
import './Header.css';
import {Link, useHistory} from 'react-router-dom';
import VerticalMenu from "../VerticalMenu/VerticalMenu";
import CategoriesList from '../CategoriesList/CategoriesList';
import SearchPanel from '../SearchPanel/SearchPanel';
import ContactUs from '../ContactUs/ContactUs'

class Header extends React.Component {
    state = {
        _showVerticalMenu: false
    }
    showVertical = () => {
        this.setState((prevState) => {
            return {_showVerticalMenu: !prevState._showVerticalMenu}
        })
    }
    loggedOut = () => {
        this.props.logoutCallback();
        this.setState((prevState) => {
            return {_showVerticalMenu: !prevState._showVerticalMenu}
        });

    }
    render(){
        const categories = ['covid-19', 'political', 'sport', 'art'];
        return (
            <header className='pt-4 pb-4 px-4 d-flex justify-content-between align-items-center'>
                <div  >
                    <h1 className='m-0 text-left home_link'>
                        <Link to='/'>News App</Link>
                    </h1>
                </div>
                <div className='d-flex justify-content-between align-items-center for_big_view'>
                    <CategoriesList
                        direction='row'
                        categories={categories}
                    />
                    <SearchPanel
                        placeholder='Search for articles...'
                        onSearch={this.props.onSearch}
                        searchResults={this.props.searchResults}
                    />
                    <ContactUs />
                    <div className=''>
                        {
                            this.props.isLoggedIn ? (
                                <Link
                                    onClick={this.loggedOut}
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
                <div className='for_media_view'>
                    <div onClick={this.showVertical}>
                        <i className="fa fa-bars menu_icon"></i>
                    </div>
                    <VerticalMenu
                        show={this.state._showVerticalMenu}
                        isLoggedIn={this.props.isLoggedIn}
                        onSearch={this.props.onSearch}
                        searchResults={this.props.searchResults}
                        loggedOut={this.loggedOut}
                        closeModal={this.showVertical}
                    />
                </div>

            </header>
        )
    }
}

export default Header;