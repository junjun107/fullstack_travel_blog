import { useState } from "react";
import useLogsContext from "../hooks/useLogsContext";

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false); //set loading to true when making request, when done set to false
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { addLog } = useLogsContext();

  // //what do we want to happen when edit btn is clicked
  // //aka what happens when edit state changes from false to true
  // // we want the from to get title,rating,comments,image from this log
  // // use useEffect to do that
  // // to set data in edit state to display
  // useEffect(() => {
  //   if (logEdit.edit === true) {
  //     setTitle(logEdit.entry.title);
  //     setRating(logEdit.entry.rating);
  //     setDescription(logEdit.entry.description);
  //     setImage(logEdit.entry.image);
  //   }
  // }, [logEdit]); //run when logEdit switches

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      latitude: location.latitude,
      longitude: location.longitude,
      title,
      rating,
      description,
      image,
    };
    // console.log(data);
    addLog(data);
    console.log("current log: " + JSON.stringify(data));
    onClose();
  };

  return (
    <form className="entryForm" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="rating">Rating</label>
      <input
        id="rating"
        name="rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <label htmlFor="comment">Description</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        cols={20}
        rows={3}
      ></textarea>

      <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" className="submitBtn" disabled={loading}>
        ADD
      </button>
    </form>
  );
};

export default LogEntryForm;
