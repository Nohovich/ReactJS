const initState = {
    posts: [],
    firstInit: true
  }
  // The reducer is a pure function that takes the previous state and an action, 
  // and returns the next state. (previousState, action) => nextState. It's called a reducer because it's the type of function you would pass to Array. prototype.
  const rootReducer = (state = initState, action) => {
    console.log(action) // show in console
    // let's delete it from the state
    if (action.type == 'DELETE_POST') {
      // delete the post we want by its id 
      let new_posts = state.posts.filter(p => p.id != action.id)
      return {
        // ... = making it into a list
        ...state,
        // we switch the data we had in the posts before
        posts: new_posts
      }
    }
    else if (action.type == 'AJAX_POSTS') {
      console.log(action.data)
      if (state.firstInit) {
        state.firstInit = false
        return {
          ...state,
          posts: action.data
        }
      }
    }
  
    return state;
  
  };
  
  export default rootReducer  