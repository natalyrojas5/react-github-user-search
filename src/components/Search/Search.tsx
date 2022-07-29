import "./Search.scss";
import { Search as SearchInterface } from "@/interfaces/components";

const Search = ({ onSearch, handleInputChange }: SearchInterface) => {
  return (
    <div className="search bg-secondary border-r-06 b-shadow">
      <div className="search__icon">
        <i className="fa-solid fa-magnifying-glass text-primary"></i>
      </div>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search GitHub username ..."
          name="username"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </div>
      <div className="search__btn">
        <button
          type="button"
          className="border-r-06 btn-primary"
          onClick={onSearch}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
