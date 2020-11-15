import React, { Component } from 'react'
import { connect } from 'react-redux';
// connects is a fucn which return HOC 

import { deletePost } from './../actions/deletePost'

class Post extends Component {
  // delete the post with this id
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    // go to the main page
    this.props.history.push('/')
  }
  render() {
    console.log(this.props) // show delete func
     // checking if this.state.post isn't null
    const post = this.props.post ? (
       // if this.state.post isn't null
      <div className="post">
       {/* the title of the res */}
        <h4 className="center">{this.props.post.title}</h4>
          {/* the body of the res */}
        <p>{this.props.post.body}</p>
        <div className="center">
         {/*when clicked this post will be deleted */}
          <button className="btn gray" onClick={this.handleClick}>
            DELETE POST
          </button>
        </div>
      </div>
    ) : (
       // this.state.post is null 
        <div className="center">Loading post...</div>
      );
       // returning the object
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // own props is the original props of the component
  let id = ownProps.match.params.post_id // look in App.js route parameter

  // this will take data from the state
  // and put it into the component props
  return {
    // will create props.posts on the component
    // from the state.posts
    post: state.posts.find(p => p.id == id)
  }
}

// 
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      // sending to the reducer the type(deletePost) and the data(id)
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)