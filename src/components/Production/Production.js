import React from 'react';
import Product from './Product/Product';
import {Link} from 'react-router-dom';

const production = (props) =>{
  let prosuctRender = props.productionData.slice(0,8).map(item => {
  	 return  <Product title={item.title}/> 
  })

	return(
         <div className="container">

        <div className="mane_content col-md-12">
           <h2>პროდუქცია</h2>
           
               {prosuctRender}
           
                          <div className="all col-md-12">
                  <Link to='/shop' >ყველა</Link>
              </div>
        </div>

</div>

		)
};

export default production;