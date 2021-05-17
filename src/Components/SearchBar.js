import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

//we can add autocomplete here or previous search
const list = [{ title: "Cat" }, { title: "Dog" }, { title: "Turtle" }];

const SearchBar = ({ changeSearchTerm }) => {
  return (
    <Autocomplete
      className="searchBox"
      options={list.map((option) => option.title)}
      onChange={(e) => changeSearchTerm(e.target.textContent)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          margin="normal"
          variant="outlined"
          onChange={(e) => changeSearchTerm(e.target.value)}
        />
      )}
    />
  );
};

export default SearchBar;
