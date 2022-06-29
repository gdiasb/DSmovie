import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import Navigation from "../../components/Navigation/Navigation";
import Score from "../../components/Score/score";
import Stars from "../../components/StarsRow/stars";
import { BASE_URL } from "../../data/requests";


interface Props {
  id: number;
  image: string;
  title: string;
  count: number;
  score: number;
  children: React.ReactNode;
}

interface dataProps {
  content: Props[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

function Home() {

  const [data, setData] = useState<dataProps>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const [page, setPage] = useState(0);

  function handleClick(pageNumber : number) {
    setPage(pageNumber);
  }

  function handleClickPrevious() {
    setPage(page-1)
  }

  function handleClickFoward() {
    setPage(page+1)
  }


  useEffect(() => {
    axios
      .get(`${BASE_URL}?size=8&page=${page}&sort=title`)
      .then((response) => {
        setData(response.data);
      });
    }, [page])
    
  
  return (
    <div className="container row gy-4 mx-auto mt-5">
      {data.content.map(
        ({ count, id, title, image, score }: Props) => {
          return (
            <div
              className="col-sm-6 col-md-4 col-lg-3 text-center"
              key={id}>
              <Card id={id} image={image} title={title}>
                <Score score={score} />
                <p>Score {score} from {count} votes</p>
              </Card>
            </div>
          );
        },
      )}

      <Navigation
        page={page}
        totalPages={data.totalPages}
        handleClickPrevious={handleClickPrevious}
        handleClick={handleClick}
        handleClickFoward={handleClickFoward}
      />
    </div>
  );
}

export default Home;