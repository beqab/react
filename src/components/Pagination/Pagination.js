import React,{Component} from 'react';
import { Route, NavLink} from 'react-router-dom';


class Pagination extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }



  handleClick(e){
    e.preventDefault();
    let nuber = 2;
    this.props.num(nuber);
  }


componentDidMount(){
  console.log(this.props.items)
}
  render(){

    console.log(this.props.items)


    
    
    return    <div className="all col-md-12">
                   <div aria-label="Page navigation">
                     <ul className="pagination">
                       <li>
                         <a href="" aria-label="Previous">
                           <span aria-hidden="true">&laquo;</span>
                         </a>
                       </li>
                     
                     
                     
                       <li>
                         <a href="javascript:void(0)" aria-label="Next" onClick={this.handleClick}>
                           <span aria-hidden="true">&raquo;</span>
                         </a>
                       </li>
                     </ul>
                   </div>
               </div>;
  }
}


// const pagination = (props) =>{

//     handleClick(e){
//     e.prevenetDefault();
//     let num = 2;

//     console.loog(num);

//     }.bind(this)

//     let paginatinlangth=props.items.length/12;
//     let araipagination=[];
   
//    for(let i=1; i<paginatinlangth; i++  ){
    
//   // araipagination.push(<li key={i}><NavLink to={"/shop/"+i}>{i}</NavLink></li>)
    
//    }
    
//     return(

//          <div className="all col-md-12">
//                   <div aria-label="Page navigation">
//   <ul className="pagination">
//     <li>
//       <a href="" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     {araipagination}
   
   
//     <li>
//       <a href="javascript:void(0)" aria-label="Next" onClick={handleClick}>
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </div>
//               </div>
//     	)

// }

export default Pagination;