import { useState, useEffect } from 'react';
import PostsList from './PostsList';

const Posts = () => {
  const [posts, setPosts] = useState(null);

  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  }

  const fetchPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw Error('Could not fetch data');
      }
      const data = await res.json();
      const posts = data.slice(0, 10);
      setPosts(posts);
    }
    catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  
  return (
    <div className="posts">
      {posts && <PostsList posts={posts} handleDelete={handleDelete} />}
    </div>
  );
}
 
export default Posts;