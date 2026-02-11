import React, { useEffect, useRef, useState, useReducer, lazy, Suspense } from "react";

const Results = lazy(() => import("./assets/Results"));

const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      
      if (!action.payload.trim()) return state;
      return [action.payload, ...state];

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

const App = () => {
  const inputRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  const [history, dispatch] = useReducer(historyReducer, []);

  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(searchText);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

 
  useEffect(() => {
    if (!debouncedText.trim()) return;

    setSearchCount(prev => prev + 1);

    dispatch({
      type: "ADD",
      payload: debouncedText
    });
  }, [debouncedText]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounced Search + History</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search here..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <p>Search Count: {searchCount}</p>

     
      <Suspense fallback={<p>Loading Results...</p>}>
        <Results query={debouncedText} />
      </Suspense>

      <h3>Search History</h3>

      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear History
      </button>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
