import { useState } from "react";

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
    setSearchData({ search: "" });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Search">Search</label>
          <input
            onChange={handleChange}
            type="text"
            name="search"
            value={searchData.search}
          />
        </div>
        <button onClick={usedSearch}>go</button>
      </form>
    </div>
  );
}

export default SearchForm;
