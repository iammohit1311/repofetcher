import React from "react";
import { Container } from "@mui/material";

const SearchBar = ({ name, setName, setNameFromButtonClick }) => {
  const handleClick = () => {
    setNameFromButtonClick(name);
  };

  return (
    <div style={{ padding: "10px" }}>
      <Container maxWidth="sm">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" onClick={handleClick}>
            Fetch
          </button>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
