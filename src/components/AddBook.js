import "./AddBook.css";
import { useState } from "react";
import axios from 'axios'

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAutthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
   axios
      .post('http://127.0.0.1:8000/api/book', {
         title: title,
         author: author,
         publisher:publisher
      })
      .then((res) => {
         
         setTitle('');
         setAutthor('');
         setPublisher('');
      })
      .catch((err) => {
         console.log(err.message);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAutthor(e.target.value)}
        />
        <input
          type="text"
          value={publisher}
          placeholder="Publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default AddBook;