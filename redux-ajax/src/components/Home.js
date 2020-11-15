import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../images/pokeball.png";
import { connect } from "react-redux";
// connects is a fucn which return HOC

class Home extends Component {
  /*
  // first way
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.props.addPosts(json))
  }
  */

  render() {
    console.log(this.props);
    // this line is equal to this.props.posts
    const { posts } = this.props;
    // checking if this.state.posts isn't null(has a post)
    const postList = posts.length ? (
      // returning like a dictionary
      posts.map((post) => {
        return (
          // key post.id
          <div className="post card2" key={post.id}>
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              {/* when pressing on this link(title) a new page will appear showing only this object */}
              <Link to={"/posts/" + post.id}>
                {/* the title of this object we got  */}
                <span className="card-title red-text">{post.title}</span>
              </Link>
              {/* the body of this object we got  */}
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      // if  this.state.posts is null
      <div className="center">No posts to show</div>
    );

     // when the mapping has ended return the result
    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

/*
// first way
const mapDispatchToProps = (dispatch) => {
  return {
    addPosts: (new_posts) => {
      dispatch({
        type: 'AJAX_POSTS',
        data: new_posts
      })
    }
  }
}
*/

const mapStateToProps = (state) => {
  // this will take data from the state
  // and put it into the component props
  return {
    // will create props.posts on the component
    // from the state.posts
    posts: state.posts,
  };
};

// first way
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default connect(mapStateToProps)(Home);
