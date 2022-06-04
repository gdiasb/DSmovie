interface Props {
  id?: number;
  image: string;
  title: string;
  count?: number;
  score?: number;
  children?: React.ReactNode;
}

function Card(props:Props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 border bg-info text-center mx-auto">
      <div className="card mx-1 my-2">
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text">{props.children}</p>
          <a href="#" className="btn btn-secondary">Rate!</a>
        </div>
      </div>
    </div>)
}

export default Card;