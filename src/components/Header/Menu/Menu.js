import React from 'react';


const menu = (props) => {
let meniuRender = props.menulist.menuList.map((menuiTem, index) =>{
	return(<li key={props.menulist.menuUrls[index]} > <a href={props.menulist.menuUrls[index]}>{menuiTem}  </a></li>)
})
       return(
     <ul className="nav navbar-nav">
        {meniuRender}
      </ul>
       	)
}

export default menu;