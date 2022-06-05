import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import { BASE_URL } from "../../data/requests";


interface Props {
  id?: number;
  image: string;
  title: string;
  count?: number;
  score?: number;
  children?: React.ReactNode;
}

function Home() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}?size=12`)
      .then(response => {
        setData(response.data.content);

        setPage(response.data.totalPages);
      })
    }, [])
    
    console.log(page);

  return (
    <div className="container row gy-4 mx-auto mt-5">
      {data.map(
        ({ count, id, title, image, score }: Props) => {
          return (
            <div
              className="col-sm-6 col-md-4 col-lg-3 text-center mx-auto"
              key={id}>
              <Card image={image} title={title}>
                {count}
              </Card>
            </div>
          );
        },
      )}

      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;