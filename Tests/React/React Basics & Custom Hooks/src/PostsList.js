const PostsList = ({ posts, handleDelete }) => {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{ post.title.toUpperCase() }</h3>
          <p>{ post.body }</p>
          <button onClick={() => handleDelete(post.id)}>Delete post</button>
        </div>
      ))}
    </div>
  )
}

export default PostsList;