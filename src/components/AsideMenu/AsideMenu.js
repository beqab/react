import React from 'react';
import Menu1 from './Menu1/Menu1';

const asidemenu=(props) =>{
console.log(props.AsideMenuItems)
let menu1 = props.AsideMenuItems


	return(
		    <div className="col-md-3">
               <Menu1 classAdd='service_aside' menuitems={props.AsideMenuItems.Aside1} />
               <Menu1 classAdd='shop_aside' menuitems={props.AsideMenuItems.Aside2} />
             </div>
		)
}

export default asidemenu;