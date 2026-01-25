const LightMode = ({ isOn, toggle }) => {
  return (
    <button onClick={toggle}>
      {isOn ? "Light Mode ON" : "Light Mode OFF"}
    </button>
  );
};

export default LightMode;
