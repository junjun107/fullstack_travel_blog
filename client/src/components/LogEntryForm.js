import { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "../API";
import useLogsContext from "../hooks/useLogsContext";

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false); //set loading to true when making request, when done set to false
  const { register, handleSubmit } = useForm();

  const { dispatch } = useLogsContext;

  const onSubmit = async (data) => {
    try {
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      dispatch({ type: "CREATE_LOG", payload: created });
    } catch (error) {
      console.log(error);
      onClose();
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entryForm">
      <label htmlFor="title">Title</label>
      <input {...register("title")} name="title" type="text" required />

      <label htmlFor="rating">Rating</label>
      <input id="rating" {...register("rating")} name="rating" type="number" />

      <label htmlFor="comment">Description</label>
      <textarea
        id="comment"
        name="comment"
        {...register("comment")}
        cols={20}
        rows={3}
      ></textarea>

      <label htmlFor="image">Image</label>
      <input id="image" {...register("image")} name="image" />
      <button type="submit" className="submitBtn" disabled={loading}>
        ADD
      </button>
    </form>
  );
};

export default LogEntryForm;
