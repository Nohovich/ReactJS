import React, { Component } from "react";
// using npm i axios
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../images/pokeball.png";

class Home extends Component {
  state = {
    posts: [],
  };
  // AJAX requests and DOM or state updates should occur.
  componentDidMount() {
    // passing the link, the res is in json
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      console.log(res);
      //updating the data(posts) in state
      this.setState({
        // we want only the first 10 objects back
        posts: res.data.slice(0, 10),
      });
    });
  }
  render() {
    // this line is equal to : this.state.posts
    const { posts } = this.state;
    // checking if this.state.posts isn't null(has a post)
    const postList = posts.length ? (
      // returning like a dictionary
      posts.map((post) => {
        return (
          // key is the id
          <div className="post card" key={post.id}>
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

export default Home;
