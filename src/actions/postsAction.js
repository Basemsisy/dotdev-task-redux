import { TOGGLE_LIKE, FETCH_POSTS } from './types';

export const toggleLik = (id) => { 
  return {
      type: TOGGLE_LIKE,
      payload: id
    }
}

export const fetchPosts = () => {
  return (dispatch) => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({type: FETCH_POSTS, payload: data}))
      
    }
    catch (e) {
      console.log(e)
    }

  }
}