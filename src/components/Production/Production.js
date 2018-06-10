import React from 'react';
import Product from './Product/Product'


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
                  <a   href="shop.html">ყველა</a>
              </div>
        </div>

</div>

		)
};

export default production;