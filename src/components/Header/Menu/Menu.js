import React from 'react';
import { Route, NavLink} from 'react-router-dom';


const menu = (props) => {
let meniuRender = props.menulist.menuList.map((menuiTem, index) =>{
	return(<li key={props.menulist.menuUrls[index]} > <NavLink
		activeClassName='hedaer_nav_active'
        exact
	 to={{
		pathname:props.menulist.menuUrls[index]
	}}>{menuiTem}  </NavLink></li>)
})
       return(
     <ul className="nav navbar-nav">
        {meniuRender}
      </ul>
       	)
}

export default menu;