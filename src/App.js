import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Asidemenu from './components/AsideMenu/AsideMenu';
import Mainslider from './components/MainSlider/MainSlider';
import Production from './components/Production/Production';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import Shop from './components/Shop/Shop';
import Pagination from './components/Pagination/Pagination';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.habdleNum = this.habdleNum.bind(this);
  }

  state={
    H1:'კომპიუტერული სერვისები და მეორადი კომპიუტერული ტექნიკა',
    phone:'555 32 32 23',
    menu:{
      menuList:['მთავარიii', 'სერვისებიtt','მაღაზია','კონტაქტი'],
      menuUrls:['/','/service','/shop','contact']
    },
    AideMenu:{
      Aside1:['ყველა სერვისი', 'ტექნიკური სერვისი','პროგრამულ სერვისი', 'ლეპტოპის შეკეთება','მობილურების შეკეთება'],
      Aside2:['ყველა პროდუქცია', 'ლეპტოპის ეკრანები', 'ლეპტოპის კლავიატურები', 'მონაცემთა მატარებლები', 'ქსელის პროდუქტები','პერიფერიული მოწყობილობები']
    },
    productsData:[],

    shopPage:1,
  }

  componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{

        this.setState({
            productsData:response.data,
        })
   })
  }

clickPag(a){
    
}

habdleNum =(num)=>{
  alert("App" +num);
  this.setState({
shopPage:num
  })
}

  render() {
        // console.log(this.state.productsData)
    return (
      <BrowserRouter>
      <div className="App">
        <Header menuList={this.state.menu} H1={this.state.H1} />
        <div className="container">
        <div className="col-md-12">
                  <Asidemenu AsideMenuItems={this.state.AideMenu} />
               
                  <Route path="/" exact component={Mainslider} /> 
                  <Route path="/service" exact render={() =>  <Service /> } /> 
                  <Route path="/shop"  render={() =>  <Shop pagenumber={this.state.shopPage} productionData={this.state.productsData} /> } /> 
                  <Route path="/shop"  render={() =>  <Pagination pageNumber={this.state.shopPage} num={this.habdleNum} clickPag={this.clickPag} items={this.state.productsData} /> } /> 

        </div>
        </div>
                  <Route path="/" exact  render={() =>    <Production productionData={this.state.productsData} /> } /> 
      
        <Footer phone={this.state.phone}  menuList={this.state.menu} H1={this.state.H1}  />
      </div>
      </BrowserRouter>
    ) ;
  }
}

export default App;
