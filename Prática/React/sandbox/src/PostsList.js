const PostsList = ({ posts }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{ post.title.toUpperCase() }</h3>
          <p>{ post.body }</p>
        </div>
      ))}
    </div>
  )
}

export default PostsList;