import React from 'react';
import './Article.css';
import {toHumanReadable} from "../../helpers";
import PropTypes from 'prop-types';



const Article = (props) => {
    const beautifyText = (text) => {
        const searchChar = text.includes(':') ? ':' : '։';
        const splittedArr = text.split(searchChar);
        const resultedArr = [];
        for(let i = 0;i < splittedArr.length;i += 2){
            if(splittedArr[i + 1]){
                resultedArr.push(splittedArr[i] + searchChar + ' ' + splittedArr[i + 1] + searchChar);
            }
        }
        if(splittedArr.length % 2 === 1)
            resultedArr.push(splittedArr[splittedArr.length - 1]);
        console.log(splittedArr.length)
        return resultedArr;
    }
    return (
        <article className='pt-4 pb-4 w-75 mx-auto'>
            <h1 className='article_heading'>{props.title}</h1>
            <div className='article_content w-100 '>
                <img src={props.imgUrl} alt="Not found" className='float-left mr-4 article_img'/>
                {
                    beautifyText(props.content).map((textBlock, index) => (
                        <p
                            className='pt-3'
                            key={index}>
                            {textBlock}
                        </p>
                    ))
                }
            </div>
            <div className='info_about_article d-flex justify-content-around mt-3'>
                {
                    (props.author) ? (
                        <span>Author: {props.author}</span>
                    ) : (
                        <span>No author mentioned</span>
                    )
                }
                {
                    (props.source) ? (
                        <span><a href={props.source} target='_blank'>Source here...</a></span>
                    ) : (
                        <span>No source URL</span>
                    )
                }
                <span>Created At: {toHumanReadable(props.createdAt)}</span>
            </div>
        </article>
    )
}

Article.propTypes = {
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
export default Article;