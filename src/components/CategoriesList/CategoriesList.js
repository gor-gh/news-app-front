import React from 'react';
import {NavLink} from 'react-router-dom';
import {capitalize} from '../../helpers';
import './CategoriesList.css';


const CategoriesList = (props) => {
    return (
        <div className={`list_cont d-flex ${ props.direction === 'row' ? 'flex-direction-row' : 'flex-direction-column' }`}>
            {
                props.categories.map((categ, index) => {

                    return (
                        <NavLink
                            to={`/categories/${categ}`}
                            className='px-4 btn btn-hover'
                            key={index}>
                            {capitalize(categ)}
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default CategoriesList;