import React from 'react';
import { Route } from 'react-router-dom';
import Menu1 from './Menu1/Menu1';



const asidemenu=(props) =>{



	return(

		    <div className="col-md-3">
		    <Route path="/service" exact render={() =>{ 
		    	return(
		      <Menu1 classAdd='service_aside' menuitems={props.AsideMenuItems.Aside1} />
		      )

		       }} /> 
		    <Route path="/" exact render={() =>  { 
		    	return(
		      <Menu1 classAdd='service_aside' menuitems={props.AsideMenuItems.Aside1} />
		      )
		       }  
		   		} />
		       <Route path="/" exact render={() =>  { 
		    	return(
		      <Menu1 classAdd='service_aside' menuitems={props.AsideMenuItems.Aside2} /> 
		      )
		       }
		         } />
             <Route path="/shop"  render={() =>   <Menu1 classAdd='service_aside' menuitems={props.AsideMenuItems.Aside2} />  } />
            
             </div>

		)
}

export default asidemenu;