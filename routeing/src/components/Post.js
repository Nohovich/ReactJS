/*
import React, { Component } from 'react'
class Post extends Component {
  state = {
    id: null
  }
  
  // ----> this is good time to find out the parameter
  componentDidMount(){ 
      console.log(this.props.match.params)
    let id = this.props.match.params.post_id;
    this.setState({
      id
    })
  }
  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    )
  }
}
export default Post
*/

import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null,
  };

  // AJAX requests and DOM or state updates should occur.
  componentDidMount() {
    // the value is passed in the url
    let id = this.props.match.params.post_id;
    // HTTP request 
    // getting the object we want using its id
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      // the res is in json
      .then((res) => {
        // updating the the data(post) in the state
        this.setState({
          post: res.data,
        });
        //console.log(res.data);
      });
  }
  render() {
    // checking if this.state.post isn't null
    const post = this.state.post ? (
      // if this.state.post isn't null
      <div className="post">
      {/* the title of the res */}
        <h4 className="center">{this.state.post.title}</h4>
         {/* the body of the res */}
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      // this.state.post is null 
      <div className="center">Loading post...</div>
    );
    // returning the object
    return <div className="container">{post}</div>;
  }
}

export default Post;
