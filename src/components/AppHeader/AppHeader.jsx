import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddBook from "../AddBook/AddBook"

const AppHeader = () => {
  const [addPopUp, setAddPopUp] = useState(false);
  return (
    <>
      <div className="header">
        <h3>SplendorNet Task</h3>
        <NavLink className="link">
          <button className="add-btn" onClick={()=>setAddPopUp(true)}>Add Book</button>
        </NavLink>
      </div>
      {
        addPopUp && <AddBook setAddPopUp={setAddPopUp}/>
      }
    </>
  );
};

export default AppHeader;
