import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import SearchBar from "./SearchBar";
import GifCard from "./GifCard";

function SearchPage() {
  const [gifs, setGifs] = useState([]);

  //move to other file like API for all requests of GIPHY, we can add there pagination support, etc...
  const debouncedSearch = useDebouncedCallback((search) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setGifs(resp.data));
  }, 1000);

  return (
    <div>
      <SearchBar changeSearchTerm={debouncedSearch} />
      <div className="gridList">
        {gifs?.map((gifObj) => (
          <GifCard key={gifObj.id} gifObj={gifObj} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
