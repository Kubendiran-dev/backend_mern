import React from "react";

const Results = ({ query }) => {
  if (!query) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Results for: {query}</h3>
      <p>Showing fake results for "{query}"...</p>
    </div>
  );
};

export default Results;
