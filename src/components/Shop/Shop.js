import React from 'react';
import Cellitem from './CellItem/CellItem';


const shop = (props) =>  {

   

    let CellRender = props.productionData.slice(0,12).map((item, id) => {
     return ( <Cellitem key={id} title={item.title}/> )
  })


   return(
                <div className="col-md-9">
              {CellRender}

           
            </div>
   	)
}

export default shop;