import withCounter from "./withCounter";

const Dislike = ({ count, increment }) => {
  return <button onClick={increment}>Dislike {count}</button>;
};

export default withCounter(Dislike);
