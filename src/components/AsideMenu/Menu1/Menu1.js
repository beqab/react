import React from 'react'

const menu1 =(props) =>{
let sideMneuRender = props.menuitems.map((item, ind) => {
   return (  <li key={ind}><a href="">{item}</a></li>)
})

	return(
           <div className={props.classAdd}>
                  <ul>
                      {sideMneuRender}
                  </ul>
                 </div>
		)
}

export default menu1;