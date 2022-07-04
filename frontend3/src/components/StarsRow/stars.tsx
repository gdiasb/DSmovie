import './stars.style.scss';

function Stars() {

  return (

    <div className="d-flex gap-1 mt-3 align-items-center justify-content-center">
      <fieldset className="stars-rating">
        <input
          type="radio"
          id="star5"
          value="5"
          name="rating"
        />
        <label
          className="full-star"
          htmlFor="star5"
          title="Awesome!"></label>

        <input
          type="radio"
          id="star45"
          value="4.5"
          name="rating"
        />
        <label
          className="half-star"
          htmlFor="star45"
          title="Awesome! But..."></label>

        <input
          type="radio"
          id="star4"
          value="4"
          name="rating"
        />
        <label
          className="full-star"
          htmlFor="star4"
          title="Pretty Good"></label>

        <input
          type="radio"
          id="star35"
          value="3.5"
          name="rating"
        />
        <label
          className="half-star"
          htmlFor="star35"
          title="Good"></label>

        <input
          type="radio"
          id="star3"
          value="3"
          name="rating"
        />
        <label
          className="full-star"
          htmlFor="star3"
          title="Ok"></label>

        <input
          type="radio"
          id="star25"
          value="2.5"
          name="rating"
        />
        <label
          className="half-star"
          htmlFor="star25"
          title="Meh"></label>

        <input
          type="radio"
          id="star2"
          value="2"
          name="rating"
        />
        <label
          className="full-star"
          htmlFor="star2"
          title="Ew!"></label>

        <input
          type="radio"
          id="star15"
          value="1.5"
          name="rating"
        />
        <label
          className="half-star"
          htmlFor="star15"
          title="Terrible! But..."></label>

        <input
          type="radio"
          id="star1"
          value="1"
          name="rating"
        />
        <label
          className="full-star"
          htmlFor="star1"
          title="Terrible!"></label>

        <input
          type="radio"
          id="star05"
          value="0.5"
          name="rating"
        />
        <label
          className="half-star"
          htmlFor="star05"
          title="What a waste of time..."></label>
      </fieldset>
    </div>
  );
}

export default Stars;
