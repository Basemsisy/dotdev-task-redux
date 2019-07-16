import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleLik} from '../actions/postsAction';



class UserActions extends Component {

  render() {
    const { post, toggleLik} = this.props;
    return (
      <div>
        <button onClick={() => toggleLik(post.id) }>
          {post.liked ? "unlike" : "like"}
        </button>
      </div>
    )
  }
}

export default connect(null, {toggleLik})(UserActions)
