import Stars from "../StarsRow/stars";

function Form({title}:{title: string}) {
  return (
    <form>
      <h2 className="mb-4">{title}</h2>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control ps-5"
          id="inputEmail"
          aria-describedby="emailHelp"
        />
        {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        <Stars />

        <div className="d-flex justify-content-center align-items-center mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;