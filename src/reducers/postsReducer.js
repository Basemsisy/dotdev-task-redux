import { posts } from '../posts';
import { TOGGLE_LIKE, FETCH_POSTS } from '../actions/types';

const INITIAL_STATE = { posts: posts }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_LIKE:
        const posts = [...state.posts];
        let index = posts.findIndex(item => item.id === action.payload);
        let post = posts[index];
        post.liked = !post.liked;
        post = {...post};
        posts[index] = post;
      return {...state, posts: posts}
    case  FETCH_POSTS:
      return {...state, posts: action.payload}
    default:
      return state
  }
}