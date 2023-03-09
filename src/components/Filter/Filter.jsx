import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import icon from "../../assets/Icon.svg";

export const Filter = ({ onFilterSubmit }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const filterRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    onFilterSubmit(filterRef.current.value);
  };
  return (
    <form className="search__form" onSubmit={onSubmit}>
      <input
        className="search__field"
        name="filter"
        type="text"
        ref={filterRef}
        defaultValue={searchQuery && searchQuery}
        placeholder="Filter by name..."
      />
      <button className="search__button" type="submit">
        <img src={icon} alt="Search button" />
      </button>
    </form>
  );
};
