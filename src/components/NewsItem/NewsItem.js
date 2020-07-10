import React from 'react';
import './NewsItem.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {toHumanReadable} from "../../helpers";

const NewsItem = (props) => {
    // const imageUrl = require(props.imgUrl);

    return (
        <div className='news_item p-2 d-flex'>
            <img src={props.imgUrl} className='news_img' alt=""/>
            <div className='content_cont'>
                <div className='d-flex justify-content-end'>
                    <Link className='news_link' to={`/categories/${props.category}`}>
                        <span className='news_category'>{props.category}</span>
                    </Link>
                </div>
                <Link
                    title={props.description ? props.description : 'No description'}
                    className='news_link'
                    to={`/articles/${props.id}`}
                >
                    <h5 className='text-left pl-2 news_title'>{props.title}</h5>
                    <p className='px-3 text-left news_content'>
                        {props.content.slice(0,500) + '...'}
                    </p>
                </Link>
                <div className='d-flex justify-content-around'>
                    <span className='news_author'>{props.author ? props.author : 'No author mentioned'}</span>
                    <span className='news_date'>{toHumanReadable(props.createdAt)}</span>
                </div>
            </div>
        </div>
    )
}
NewsItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string,
    source: PropTypes.string,
    description: PropTypes.string
}

export default NewsItem;