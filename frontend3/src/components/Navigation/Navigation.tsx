interface Props {
  page: number;
  totalPages: number;
  handleClickPrevious: any;
  handleClick: any;
  handleClickFoward: any;
}

function Navigation({
  page,
  totalPages,
  handleClickPrevious,
  handleClick,
  handleClickFoward,
} : Props) {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {page == 0 ? (
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        ) : (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={handleClickPrevious}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
        )}

        {[...Array(totalPages).keys()].map((index) => (
          <li className="page-item" key={index}>
            <a
              className="page-link"
              href="#"
              onClick={() => handleClick(index)}>
              <span>{index + 1}</span>
            </a>
          </li>
        ))}

        {page == totalPages - 1 ? (
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        ) : (
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={handleClickFoward}>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
