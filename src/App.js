import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header';
import Asidemenu from './components/AsideMenu/AsideMenu';
import Mainslider from './components/MainSlider/MainSlider';
import Production from './components/Production/Production';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  state={
    H1:'კომპიუტერული სერვისები და მეორადი კომპიუტერული ტექნიკა',
    phone:'555 32 32 23',
    menu:{
      menuList:['მთავარი', 'სერვისები','მაღაზია','კონტაქტი'],
      menuUrls:['/mane','/service','/shop','contact']
    },
    AideMenu:{
      Aside1:['ყველა სერვისი', 'ტექნიკური სერვისი','პროგრამულ სერვისი', 'ლეპტოპის შეკეთება','მობილურების შეკეთება'],
      Aside2:['ყველა პროდუქცია', 'ლეპტოპის ეკრანები', 'ლეპტოპის კლავიატურები', 'მონაცემთა მატარებლები', 'ქსელის პროდუქტები','პერიფერიული მოწყობილობები']
    },
    productsData:[]
  }

  componentDidMount(){
   let productsData = axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{

        this.setState({
            productsData:response.data,
        })
   })
  }


  render() {
        console.log(this.state.productsData)
    return (
      <BrowserRouter>
      <div className="App">
        <Header menuList={this.state.menu} H1={this.state.H1} />
        <div className="container">
        <div className="col-md-12">
                  <Asidemenu AsideMenuItems={this.state.AideMenu} />
                  <Mainslider />

        </div>
        </div>
        <Production productionData={this.state.productsData} />
        <Footer phone={this.state.phone}  menuList={this.state.menu} H1={this.state.H1}  />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
