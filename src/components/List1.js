import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsAction';


class List1 extends React.Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const {posts} = this.props;
    return (
      <div className="list">
        {
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return posts
}

export default connect(mapStateToProps , {fetchPosts})(List1)