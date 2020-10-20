import React from 'react';
import './PreparationHeader.css';

const PreparationHeader = (props) => {
     return (
          <div className='PreparationHeader'>
               <h6 className='PrepHead color'>Preparation:</h6>
               <div className='Time'>
                    <p className='BorderRed'>Total Time:{props.totalTime}min</p>
                    <p>Preparation:{props.prepTime}min</p>
               </div>
          </div>
     );
};

export default PreparationHeader;
