import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Pagination() {
  return (
    <div
      className="d-flex w-50 mx-auto justify-content-center mt-3"
      style={{ backgroundColor: "red" }}
    >
      <button className="btn me-3 fs-4">
        <FiChevronLeft />
      </button>
      <p className="my-auto">{"${1} de ${3}"}</p>
      <button className="ms-3 fs-4">
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;