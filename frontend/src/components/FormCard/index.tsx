interface Props {
  id: number;
  image: string;
  title: string;
  count: number;
  score: number;
}
function FormCard(props: Props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div>
            <label htmlFor="score" className="mb-1">Your score</label>
          <div className="inline-row align-items-center mb-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                3
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                value="option4"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox4">
                4
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                value="option5"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox5">
                5
              </label>
            </div>
          </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;