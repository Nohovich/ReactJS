export const deletePost = (id) => {
  // sending to the reducer the type(deletePost) and the data(id)
    return {
      type: 'DELETE_POST',
      id: id
    }
  }