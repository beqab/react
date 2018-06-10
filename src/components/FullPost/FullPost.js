import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state ={
        slectPost:null,
    }
    componentDidUpdate(){
            if(this.props.id){

                if(!this.state.slectPost || (this.props.id !== this.state.slectPost.id)){
              
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response =>{console.log(response.data.title)
                    this.setState({
                        slectPost:response.data
                    })


              
                    
                    // console.log(this.state.slectPost.title)
                })
            }
            }
    }

    deletHandler = () =>{
        console.log('text')
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response =>{
         console.log(response)
        })
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
         if(this.props.id){

         }

        if(this.state.slectPost){
             // console.log(this.state.setState)
              post = (
            <div id={this.props.id} className="FullPost">
                <h1>{this.state.slectPost.title}</h1>
                <p>{this.state.slectPost.body}</p>
                <div className="Edit">
                    <button onClick={this.deletHandler} className="Delete">Delete</button>
                </div>
                
            </div>

        );
        }
      
        return post;
    }
}

export default FullPost;