import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('rin')
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author }

    setIsLoading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsLoading(false);
    });
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={ title }
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={ body }
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={ author }
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="Rin">Rin</option>
          <option value="Holo">Holo</option>
          <option value="Ryuunosuke">Ryuunosuke</option>
        </select>
        { !isLoading && <button>Add blog</button>}
        { isLoading && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
}
 
export default Create;