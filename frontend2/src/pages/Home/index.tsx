import MovieCard from "../../components/MovieCard"

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-2">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <MovieCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default Home