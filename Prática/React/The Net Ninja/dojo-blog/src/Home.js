import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My first post!", body: "Lorem ipsum...", author: "Holo", id: 1},
    {title: "Camping guide", body: "Lorem ipsum...", author: "Rin", id: 2},
    {title: "Creating an AI with python", body: "Lorem ipsum...", author: "Ryuunosuke", id: 3}
  ]);

  const [name, setName] = useState('Nino');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Rin")} title="Rin's Blogs" />
      <button onClick={() => setName('Miku')}>Change name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;