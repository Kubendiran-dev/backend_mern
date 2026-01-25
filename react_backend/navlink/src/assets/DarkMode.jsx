const DarkMode = ({ isOn, toggle }) => {
  return (
    <button onClick={toggle}>
      {isOn ? "🌙 Dark Mode ON" : "Dark Mode OFF"}
    </button>
  );
};

export default DarkMode;
