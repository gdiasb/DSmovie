import { Link } from 'react-router-dom';
import './card.css'

interface Props {
  id: number;
  image: string;
  title: string;
  count?: number;
  score?: number;
  children?: React.ReactNode;
}

function Card(props:Props) {
  return (
      <div className="card border-0 mx-1 my-2 h-100">
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {props.title}
          </h5>
          <p className="card-text">{props.children}</p>
        </div>
        <div className="card-footer border-0">
          <Link to={`/rate/${props.id}`} className="btn btn-secondary">
            Rate!
          </Link>
        </div>
      </div>
  );
}

export default Card;