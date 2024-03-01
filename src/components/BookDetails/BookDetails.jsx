import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";
import { Link } from "react-router-dom";
import route from "../../routes/routes.json"

// eslint-disable-next-line react/prop-types
const BookDetails = ({ id }) => {
  const [book, setBook] = useState([]);
  const { books } = useContext(BookContext);
  useEffect(() => {
    setBook(books.filter((item) => item.id === parseInt(id)));
  }, [books, id]);
  return <div className="list-container">
    {
      book.map((item,i)=>{
        return(
          <div key={i} className="book-card">
              <div className="card-img">
                <img src={item.image} />
              </div>
              <div className="card-info">
                <h4>Title : {item.title}</h4>
                <h5>Author : {item.author}</h5>
                <p className="des">Description : {item.description}</p>
              </div>
              <div className="back-home-btn">
                <button className="back-btn">
                  <Link className="link" to={route.HOME}>Back </Link>
                </button>
              </div>
          </div>
        )
      })
    }
  </div>;
};

export default BookDetails;
