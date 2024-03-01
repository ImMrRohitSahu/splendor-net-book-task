import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

// eslint-disable-next-line react/prop-types
const EditBook = ({ setEditPopUp, editId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const { books, setBooks } = useContext(BookContext);
  const [book, setBook] = useState([])

  useEffect(()=>{
    const filterItem = books.filter((item)=>item.id===editId)
    if(filterItem.length>0){
      const {title, author, description, image} = filterItem[0]
      setBook(filterItem)
      setTitle(title)
      setAuthor(author)
      setDescription(description)
      setImage(image)
    }
  },[books, editId])

  const submitHandler = () => {
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    if (title && author && description && image) {
      if (regexURL.test(image)) {
        const obj = {
          ...book[0],
          title,
          author,
          description,
          image,
        };
        const updatedbook = books.map((item)=>item.id===obj.id ? obj : item)
        setBooks(updatedbook)
        alert("Successfully Modified The Book...");
        setEditPopUp(false);
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
        <h3>Edit Book Here</h3>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Book Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Author Name"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Image URL"
            required
            value={image}
            disabled
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {
          error && <span className="error">{error}</span>
        }
        <div className="add-card-btn">
          <button className="cancel-btn" onClick={()=>setEditPopUp(false)}>Cancel</button>
          <button className="addcard-btn" onClick={submitHandler}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
