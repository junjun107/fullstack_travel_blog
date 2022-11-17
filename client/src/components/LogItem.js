import React from "react";
import StarIcon from "@mui/icons-material/Star";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useLogsContext from "../hooks/useLogsContext";

const LogItem = ({ entry }) => {
  // const { editLog, deleteLog } = useLogsContext();
  const { deleteLog } = useLogsContext();

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
      <h4 className="place">{entry.title}</h4>

      <label htmlFor="">Rating</label>
      <div className="stars">
        {Array.from(Array(entry.rating), (_, i) => (
          <StarIcon className="star" key={i} />
        ))}
      </div>

      <label htmlFor="">Notes</label>
      <p className="desc">{entry.description}</p>
      {entry.image && (
        <img src={entry.image} alt={entry.title} style={{ width: "300px" }} />
      )}
      <span className="date">{entry.createdAt}</span>
      <div className="btn_container">
        {/* <button onClick={handleEdit}>
          <EditIcon />
        </button> */}
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default LogItem;
