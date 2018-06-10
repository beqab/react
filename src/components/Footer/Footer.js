import React from 'react';

const footer = (props) =>{

	let footermenuRender = props.menuList.menuList.map((menuiTem, index) =>{
	return(<li key={props.menuList.menuUrls[index]} > <a href={props.menuList.menuUrls[index]}>{menuiTem}  </a></li>)
})
console.log(props)
	return(
            <div className="footer container-fluid">
      <footer className="container">
         <div className="footer_nav">
            <ul>
              {footermenuRender}
            </ul>
         </div>
         <div className="footer_contactinfo">
             <p>{props.H1}</p>
             <p>ტელეფონი:  {props.phone}</p>
         </div>
         <div className="copyright">
            COPYRIGHT CREATED BY <a href="#">b.b</a> © 2017
         </div>
      </footer>
   </div>
		)

}

export default footer;