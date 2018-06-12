import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';
const header = (props) =>{
	return(

           <div className="container">
       <header className="">
       <h1> {props.H1} </h1>
                <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to='/' exact>saitissxeli.ge</Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <Menu menulist={props.menuList} />
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
      
    </div>
  </div>
</nav>
       </header>
   </div>
		)
}

export default header;