import "./Search.scss";

const Search = () => {
  return (
    <div className="search bg-secondary border-r-06 b-shadow">
      <div className="search__icon">
        <i className="fa-solid fa-magnifying-glass text-primary"></i>
      </div>
      <div className="search__input">
        <input type="text" placeholder="Search GitHub username ..." />
      </div>
      <div className="search__btn">
        <button type="button" className="border-r-06 btn-primary">
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
