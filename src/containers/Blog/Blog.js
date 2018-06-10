import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
     state={
         posts:[],
         postid:null,
         error:false,
     }

    componentDidMount(){
           axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response =>{

             let fristsix = response.data.slice(0,6)
             let addauthor = fristsix.map(post => {
                 return {
                    ...post, 
                    author:'beqa'
                 }
             })
             this.setState({
                 posts:addauthor
             })
         console.log(this.state.posts[5])
           })
         .catch(error =>{
             console.log(error)

                this.setState({
                    error:true,
                })

             
         })

    }
   
    postClickHeandler= (id) =>{


        this.setState({
            postid:id
        })

       
    }
    render () {
        let posts=<p style={{textAlign:'center'}} > some facking error </p>
        if(!this.state.error){

            posts = this.state.posts.map(post =>{
           return  <Post
           clicked={() => this.postClickHeandler(post.id)}
           author={post.author} 
           key={post.id} 
           title={post.title} />
      })
        }
 

        return (
            <div>

            <ul>

                   <li><a href="/test"> test </a> </li>
                   <li><a href="/test2"> test2 </a> </li>
                   <li><a href="/test3"> test3 </a> </li>
            </ul>
           
                <section className="Posts">
                {posts}
                    
                </section>
                {/*
                <section>
                    <FullPost id={this.state.postid} />
                </section>
                <section>
                    <NewPost />  
                </section> */}
            </div>
        );
    }
}

export default Blog;