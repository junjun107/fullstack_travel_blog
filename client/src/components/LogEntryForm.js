import { useFormik } from "formik";

const LogEntryForm = () => {
  // Pass the useFormik() hook initial form values& a submit function that
  // will be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      title: "",
      rating: "",
      comment: "",
      image: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="entryForm">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
        type="text"
        required
      />

      <label htmlFor="rating">Rating</label>
      <input
        id="rating"
        onChange={formik.handleChange}
        value={formik.values.rating}
        name="rating"
        type="number"
      />

      <label htmlFor="comment">Description</label>
      <textarea
        id="comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
        name="comment"
        cols={20}
        rows={3}
      ></textarea>

      <label htmlFor="image">Image</label>
      <input
        id="image"
        onChange={formik.handleChange}
        value={formik.values.image}
        name="image"
      />
      <button type="submit" className="submitBtn">
        Submit
      </button>
    </form>
  );
};

export default LogEntryForm;
