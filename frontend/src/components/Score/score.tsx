import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import './score.style.scss';



function Score({score}: { score: number; }) {

  const fillStars = [...Array(Math.floor(score)).keys()];

  const halfStar: number = score % 1;
  
  const fadeStars: number = (5 - score);

  return (
    <div className="d-flex gap-1 mt-3 align-items-center justify-content-center">
      {fillStars.map((item) => (
        <FontAwesomeIcon
          icon={faStar}
          className="star-score"
          key={item}
        />
      ))}
      {halfStar > 0 && (
        <FontAwesomeIcon icon={faStarHalfStroke} className="star-score"/>
      )}
      {(score <= 4) && [...Array(Math.floor(fadeStars)).keys()].map(item => (<FontAwesomeIcon icon={faStar}
      className="star-faded"  key={item} />))}
    </div>
  );
}

export default Score;