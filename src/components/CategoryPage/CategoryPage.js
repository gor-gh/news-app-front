import React from 'react';
import PropTypes from 'prop-types';
import './CategoryPage.css';
import NewsItem from "../NewsItem/NewsItem";



const CategoryPage = (props) => {

    return (
        <div className='category_page_cont w-50 pb-4 mx-auto'>
            {
                props.newses.map(news => (
                    <NewsItem
                        key={news._id}
                        id={news._id}
                        title={news.title}
                        content={news.content}
                        imgUrl={news.imgUrl}
                        category={news.category}
                        author={news.author}
                        source={news.sourceUrl}
                        description={news.description}
                        createdAt={news.createdAt}
                    />
                ))
            }
        </div>
    )
}
CategoryPage.propTypes = {
    newses: PropTypes.array.isRequired
}
export default CategoryPage;