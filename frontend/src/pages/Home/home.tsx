import Card from "../../components/Card/card";

function Home() {

  const cardNumber: number = 5;
  const movieTitle: string = 'Movie Title';
  const movieCover: string =
    'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yDI6D5ZQh67YU4r2ms8qcSbAviZ.jpg';
  
  return (
    <div className="container row bg-light mx-auto mt-5">
        {[...Array(cardNumber)].map(() => {return <Card image={movieCover} title={movieTitle}>texto</Card>})}
    </div>
  );
}

export default Home;
