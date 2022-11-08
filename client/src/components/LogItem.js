import React from "react";
import StarIcon from "@mui/icons-material/Star";

const LogItem = ({ entry }) => {
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
    </div>
  );
};

export default LogItem;
