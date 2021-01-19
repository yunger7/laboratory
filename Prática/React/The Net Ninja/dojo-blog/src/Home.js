import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My first post!", body: "Lorem ipsum...", author: "Holo", id: 1},
    {title: "Camping guide", body: "Lorem ipsum...", author: "Rin", id: 2},
    {title: "Creating an AI with python", body: "Lorem ipsum...", author: "Ryuunosuke", id: 3}
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;