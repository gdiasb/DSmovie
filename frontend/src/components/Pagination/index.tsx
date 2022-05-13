import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Pagination() {
  return (
    <div
      className="container d-flex justify-content-center mt-3"
      style={{ backgroundColor: "red" }}
    >
      <button className="btn me-3 fs-4">
        <FiChevronLeft />
      </button>
      <p className="my-auto">{'${1} de ${3}'}</p>
      <button className="btn ms-3 fs-4">
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;