import classes from "./NewPost.module.css";

export default function NewPost({
  onBodyChange,
  onAuthorChange,
  onSubmit,
  onCancel,
}) {
  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={onAuthorChange} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
