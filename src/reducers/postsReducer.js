import {posts} from '../posts';

const INITIAL_STATE = {posts: posts}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'posts':
      const posts = [...state.posts];
      let post = posts.find(item => item.id === action.payload);
      post.liked = !post.liked;
      return {...state, posts: posts}
    default:
      return state
  }
}