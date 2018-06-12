import React from 'react';
import { Route, NavLink} from 'react-router-dom';


// class Pagination extends Component{

//   handleClick = (e) =>{
//     e.preventDefault();
//     let nuber = 2;
//     this.props.num(nuber);
//   }

// nuber=2;
// componentDidMount(){
//   console.log(this.props.items)
// }
//   render(){

//     console.log(this.props.items)


    
    
//     return    <div className="all col-md-12">
//                    <div aria-label="Page navigation">
//                      <ul className="pagination">
//                        <li>
//                          <a href="" aria-label="Previous">
//                            <span aria-hidden="true">&laquo;</span>
//                          </a>
//                        </li>
                     
                     
                     
//                        <li>
//                          <span href="javascript:void(0)" aria-label="Next" onClick={() => this.props.num(this.nuber)}>
//                            <span aria-hidden="true">&raquo;</span>
//                          </span>
//                        </li>
//                      </ul>
//                    </div>
//                </div>;
//   }
// }


const pagination = (props) =>{

   let  handleClick = (a) =>{
   props.num(a)
    }

      let prev=props.pageNumber
   let countDown =() =>{
    if(prev>0){

     prev--}
      return  props.num(prev)
      console.log('ddd'  )
   }
   let countUp =() =>{
    if(prev<=paginatinlangth-1){

     prev++}

      return  props.num(prev)

      console.log(paginatinlangth)
      <Redirect to={'shop/' +prev } />
   }

    let paginatinlangth=props.items.length/12;
    let araipagination=[];
   
   for(let i=1; i<paginatinlangth; i++  ){
    
  araipagination.push(<li onClick={() => handleClick(i)} key={i}><NavLink to={"/shop/"+i}>{i}</NavLink></li>)
    
   }
    
    return(

         <div className="all col-md-12">
                  <div aria-label="Page navigation">
  <ul className="pagination">
    <li>
      <span onClick={() => countDown()} href="" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </span>
    </li>
    {araipagination}
   
   
    <li>
      <span aria-label="Next" onClick={() => countUp()}>
        <span aria-hidden="true">&raquo;</span>
      </span>
    </li>
  </ul>
</div>
              </div>
    	)

}

export default pagination;