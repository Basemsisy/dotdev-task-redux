import {store} from '../store';

export const handleLike = (id) => {
    const posts = [...store.getState().posts.posts];
    let post = posts.find(item => item.id === id);
    post.liked = !post.liked;
    
    return {
      type: 'posts',
      payload: posts
    }
}