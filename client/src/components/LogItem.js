import React from "react";
import StarIcon from "@mui/icons-material/Star";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useLogsContext from "../hooks/useLogsContext";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LogItem = ({ entry }) => {
  // const { editLog, deleteLog } = useLogsContext();
  const { deleteLog } = useLogsContext();
  const logDate = new Date(entry.createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // const handleEdit = () => {
  //   console.log(entry);
  //   editLog(entry);
  // };
  const handleDelete = (id) => {
    deleteLog(entry._id);
  };

  return (
    <div className="card">
      <label htmlFor="">Place</label>
      <h3 className="place">{entry.title}</h3>

      <label htmlFor="">Rating</label>
      <div className="stars">
        {/* {Array.from(Array(entry.rating), (_, i) => (
          <StarIcon className="star" key={i} />
        ))} */}
        {Array.from(Array(entry.rating), (_, i) => (
          <StarIcon key={i} className="star" />
        ))}
      </div>

      <label htmlFor="">Notes</label>
      <p className="desc">{entry.description}</p>
      {entry.image && (
        <img src={entry.image} alt={entry.title} style={{ width: "200px" }} />
      )}
      <span className="date">{logDate}</span>
      <div className="btn_container">
        {/* <button onClick={handleEdit}>
          <EditIcon />
        </button> */}
        <button onClick={handleDelete} className="deleteBtn">
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default LogItem;
