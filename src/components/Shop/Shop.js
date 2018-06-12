import React from 'react';
import Cellitem from './CellItem/CellItem';


const shop = (props) =>  {

   let pageCaunter
  
    if(props.pagenumber <= 1){
  pageCaunter = 0
    }
    else{
    	  pageCaunter= props.pagenumber*12
    }
    let CellRender = props.productionData.slice(pageCaunter,pageCaunter+12).map((item, id) => {
     return ( <Cellitem key={id} title={item.title}/> )
  })


   return(
                <div className="col-md-9">
              {CellRender}

           
            </div>
   	)
}

export default shop;