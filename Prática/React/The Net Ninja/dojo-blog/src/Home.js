import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My first post!", body: "Lorem ipsum...", author: "Holo", id: 1},
    {title: "Camping guide", body: "Lorem ipsum...", author: "Rin", id: 2},
    {title: "Creating an AI with python", body: "Lorem ipsum...", author: "Ryuunosuke", id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Rin")} title="Rin's Blogs" />
    </div>
  );
}
 
export default Home;