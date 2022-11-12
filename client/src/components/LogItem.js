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
    console.log(entry);
    deleteLog(entry._id);
  };

  return (
    <div className="popupLog">
      <label htmlFor="">Place</label>
      <h3>{entry.title}</h3>
      <label htmlFor="">Rating</label>
      <div className="stars">
        {Array(entry.rating).fill(<StarIcon className="star" />)}
      </div>

      <label htmlFor="">Notes</label>
      <p className="description">{entry.description}</p>
      {entry.image && (
        <img src={entry.image} alt={entry.title} style={{ width: "300px" }} />
      )}
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
