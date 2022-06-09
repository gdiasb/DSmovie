import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../data/requests";
import Form from "../../components/Form/form";


function Rate() {

  const movieId = useParams();

  const [movie, setMovie] = useState({
    count: 0,
    id: 1,
    image: '',
    score: 0,
    title: ''
  });
  
  
  useEffect(() => {
  axios
    .get(`${BASE_URL}/${movieId.movieId}`)
    .then((response) => {
      setMovie(response.data);
    });
    }, [])


  
  return (
    <div className="d-flex gap-4 vh-100 justify-content-center align-items-center ms-5 me-5">

        <div className="col-sm-5 col-lg-4 m-0 p-0 rounded-start bg-warning">
          <img
            src={movie.image}
            className="img-fluid rounded-start"
          />
      </div>
      
        <Form title={movie.title} />

    </div>
  );
}

export default Rate;