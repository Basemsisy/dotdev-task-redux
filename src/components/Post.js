import React from 'react';
// import UserActions from './UserActions'

export default function Post({post}) {
  return (
    <div className="post">
      {post.title}
      {/* <UserActions post={post}/> */}
    </div>
  )
}
