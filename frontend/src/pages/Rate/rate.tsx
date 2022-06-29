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
    .get(`${BASE_URL}/movies/${movieId.movieId}`)
    .then((response) => {
      setMovie(response.data);
    });
    }, [movieId])


  
  return (
    // <div className="d-flex gap-4 vh-100 justify-content-center align-items-center ms-5 me-5 row">

    //     <div className="col-sm-5 col-lg-4 m-0 p-0 rounded-start bg-warning">
    //       <img
    //         src={movie.image}
    //         className="img-fluid rounded-start"
    //       />
    //   </div>

    //     <Form title={movie.title} />

    // </div>

    <div className="container-fluid  mt-sm-5 py-5 px-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-sm-8 col-md-8 col-lg-5">
          <img
            src={movie.image}
            className="img-fluid rounded w-100"
          />
        </div>
        <div className="col-8 col-sm-8 col-md-8 col-lg-5 pt-3 pt-lg-5 pe-lg-5">
          <Form title={movie.title} id={movie.id} />
        </div>
      </div>
    </div>
  );
}

export default Rate;