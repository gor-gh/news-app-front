import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem/NewsItem';
import './LatestNewsList.css';

const LatestNewsList = (props) => {
    const sortNewest = (newses) => {
        return newses.sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    }
    const getLastSorted = (newses) => {
        return sortNewest(newses).filter((el, index) => index < 10);
    }
    return (
        <div className='latest_container mx-auto w-50'>
            <h2 className='text-center latest_heading'>Latest News</h2>
            {
                getLastSorted(props.newses).map((news, index) => (
                    <NewsItem
                        key={news._id}
                        id={news._id}
                        title={news.title}
                        imgUrl={news.imgUrl}
                        content={news.content}
                        category={news.category}
                        description={news.description}
                        source={news.sourceUrl}
                        author={news.author}
                        createdAt={news.createdAt}
                    />
                ))
            }
            
        </div>
    )
}

LatestNewsList.propTypes = {
    newses: PropTypes.array.isRequired
}

export default LatestNewsList;