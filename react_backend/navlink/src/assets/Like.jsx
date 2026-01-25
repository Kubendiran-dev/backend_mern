import withCounter from "./withCounter";

const Like = ({ count, increment }) => {
  return <button onClick={increment}>Like {count}</button>;
};

export default withCounter(Like);
