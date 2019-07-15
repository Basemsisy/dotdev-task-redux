import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import {handleLike} from '../actions/postsAction';

class List1 extends React.Component {
  
  render() {
    const {posts, handleLike} = this.props
    return (
      <div className="list">
        {
          posts.map((post) => {
            return <Post key={post.id} post={post} handleLike={handleLike} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return posts
}

export default connect(mapStateToProps, {handleLike})(List1)