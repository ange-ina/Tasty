import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
     return (
          <Link to={`/recipee/${props.id}`}>
               <div className='CategoryItem'>
                    <div className="CategoryImg">
                    <img src={props.url} alt='' />
                    </div>
                    <h2>{props.title}</h2>
               </div>
          </Link>
     );
};

export default CategoryItem;
