import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";
import EditBook from "../EditBook/EditBook";
import { Link } from "react-router-dom";

const BookList = () => {
  const { books, setBooks } = useContext(BookContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [editPopUp, setEditPopUp] = useState(false);
  const [editId, setEditId] = useState(null);

  const deleteHandler = (deleteID) => {
    setBooks(books.filter((item) => item.id !== deleteID));
  };

  useEffect(() => {
    setData(
      books.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.author.toLowerCase().includes(search)
      )
    );
  }, [books, search]);

  return (
    <>
      <div className="search-conatiner">
        <input
          type="text"
          placeholder="Search Book Here By Title or Author Name"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className="list-container">
        {data.map((item, i) => {
          return (
            <div key={i} className="book-card">
              <div className="card-img">
                <img src={item.image} />
              </div>
              <div className="card-info">
                <h4>Title : {item.title}</h4>
                <h4>Author : {item.author}</h4>
              </div>
              <div className="card-btn">
                <button
                  className="delete btn"
                  onClick={() => deleteHandler(item.id)}
                >
                  Delete
                </button>
                <button
                  className="edit btn"
                  onClick={() => {
                    setEditId(item.id);
                    setEditPopUp(true);
                  }}
                >
                  Edit
                </button>
                <button className="details btn">
                  <Link className="link" to={`/book/${item.id}`}>
                    Details
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {editPopUp && <EditBook editId={editId} setEditPopUp={setEditPopUp} />}
    </>
  );
};

export default BookList;
