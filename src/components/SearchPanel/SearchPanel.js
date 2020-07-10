import React from 'react';
import './SearchPanel.css';
import {Link} from "react-router-dom";

class SearchPanel extends React.Component{
    state = {
        searchValue: '',
        _inputIsMaximized: false
    }
    handleInputChange = (e) => {
        this.setState({
            searchValue: e.target.value
        },() => {
            this.props.onSearch(this.state.searchValue);
        });

    }
    expandInput = () => {
        this.setState({_inputIsMaximized: true})
    }
    minimizeInput = () => {
        if(!this.state.searchValue){
            this.setState({_inputIsMaximized: false})
        }
    }

    render(){
        return (
            <div

                className='search_cont d-flex flex-direction-column w-25'>
                <div >
                    <input
                        onClick={this.expandInput}
                        onBlur={this.minimizeInput}
                        className={`search_input ${this.state._inputIsMaximized ? 'w-100' : 'w-50'}`}
                        style={{width: this.state._inputWidth}}
                        type="search"
                        placeholder={this.props.placeholder}
                        onChange={this.handleInputChange}
                        value={this.state.searchValue}
                    />
                </div>
                <div
                    className={`${this.state.searchValue ? 'd-block' : 'd-none'} search_result`}
                    style={{display: this.state.searchValue ? 'block' : 'none'}}
                >
                    {
                        (this.props.searchResults.length) ? (
                            this.props.searchResults.map((article,index) => (
                                <div
                                    className='p-2 d-flex align-items-center'
                                    key={index}
                                >
                                    <Link
                                        className='d-flex align-items-center'
                                        to={`/articles/${article._id}`}>
                                        <img src={article.imgUrl} className='search_img float-left' alt=""/>
                                        <span className='pl-1'>
                                            {article.title.slice(0,100)}
                                        </span>
                                    </Link>



                                </div>
                            ))
                        ) : (
                            <div className='pt-2 pb-2'>
                                No Result
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SearchPanel;