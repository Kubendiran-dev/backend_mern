import { useLocation } from "react-router-dom";

const ThemeSwitcher = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const mode = params.get("mode") || "light";

  const isDark = mode === "dark";

  return (
    <div
      style={{
        backgroundColor: isDark ? "#111" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <p>Current Theme: {mode}</p>
    </div>
  );
};

export default ThemeSwitcher;
