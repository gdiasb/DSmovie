function Form({title}:{title: string}) {
  return (

    <form className="col-lg-4 me-5">
      <h1>{title}</h1>
        <div className="mb-3">
          <label
            htmlFor="inputEmail"
            className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      </form>
  );
}

export default Form;