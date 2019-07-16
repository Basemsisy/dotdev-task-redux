import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleLike} from '../actions/postsAction';



class UserActions extends Component {
  render() {
    const { post, handleLike} = this.props;
    return (
      <div>
        <button onClick={() => handleLike(post.id) }>
          {post.liked ? "unlike" : "like"}
        </button>
      </div>
    )
  }
}

export default connect(null, {handleLike})(UserActions)
