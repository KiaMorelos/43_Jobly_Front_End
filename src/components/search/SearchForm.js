import { useState } from "react";
import "./Search.css";
function SearchForm({ searchFunc, usedSearch }) {
  const [searchData, setSearchData] = useState({
    search: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setSearchData((searchData) => ({
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { search } = searchData;
    searchFunc(search);
    usedSearch();
    setSearchData({ search: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="search">
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            name="search"
            value={searchData.search}
          />
        </div>
        <button>go</button>
      </form>
    </div>
  );
}

export default SearchForm;
