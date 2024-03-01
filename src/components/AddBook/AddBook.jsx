import { useContext, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

// eslint-disable-next-line react/prop-types
const AddBook = ({ setAddPopUp }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const { books, setBooks } = useContext(BookContext);

  const submitHandler = () => {
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    if (title && author && description && image) {
      if (regexURL.test(image)) {
        const obj = {
          id: books[0].id + 1,
          title,
          author,
          description,
          image,
        };
        setBooks([obj, ...books]);
        alert("Successfully Added New Book...");
        setAddPopUp(false);
      } else {
        setError("Invalid Image URL!!!");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } else {
      setError("All Fields Are Required!!!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="add-container">
      <div className="add-book-card">
        <h3>Add New Book Here</h3>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Book Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Author Name"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Image URL"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {
          error && <span className="error">{error}</span>
        }
        <div className="add-card-btn">
          <button className="cancel-btn" onClick={()=>setAddPopUp(false)}>Cancel</button>
          <button className="addcard-btn" onClick={submitHandler}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
