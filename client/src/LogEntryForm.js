import { Formik } from "formik";

const LogEntryForm = () => {
  return (
    <form className="entryForm">
      <label htmlFor="title">Title</label>
      <input name="title" />

      <label htmlFor="comments">Rating</label>
      <input name="rating" type="number" />

      <label htmlFor="comments">Description</label>
      <textarea name="comments" cols={20} rows={3}></textarea>

      <label htmlFor="comments">Image</label>
      <input name="image" />
      <button className="submitBtn">Submit</button>
    </form>
  );
};

export default LogEntryForm;
