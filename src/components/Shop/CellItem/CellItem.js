import React from 'react';

const cellitem =(props) =>{
    return(
          
               <div  className="col-md-4">
                   <a href="shop-insid.html">
                  <div className="product_block">
                     <img src="./assets/images/acer.jpg" />
                     <h3>{props.title}</h3>
                     <div className="price">
                         300 ₾
                     </div>
                  </div>
                  </a>
              </div>
    	)
};

export default cellitem;