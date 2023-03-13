import { useState } from "react";
export const SearchBar = ({}) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: use setQueue to add a new help request to the queue
  };

  const handleTextChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleTextChange}></input>
      <input type="submit" value="Search" />
    </form>
  );
};
