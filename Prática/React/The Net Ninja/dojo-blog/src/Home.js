import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('use effect ran');

    fetch('http://localhost:8000/blogs')
    .then(res => res.json())
    .then(data => {
      setBlogs(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Rin")} title="Rin's Blogs" />}
    </div>
  );
}
 
export default Home;