import { useState } from "react";

const Search = ({ cb }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="btn search-btn #1b5e20 green darken-4"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
