import React from "react";

import Like from "./assets/Like";
import Dislike from "./assets/Dislike";

import Message from "./assets/Message";
import ImageBox from "./assets/ImageBox";

import LightMode from "./assets/LightMode";
import DarkMode from "./assets/DarkMode";

import EvenOdd from "./assets/EvenOdd";
import CheckNumber from "./assets/CheckNumber";
import ToggleText from "./assets/ToggleText";
import Voting from "./assets/Voting";

import withToggleVisibility from "./assets/withToggleVisibility";

const ToggleMessage = withToggleVisibility(Message);
const ToggleImage = withToggleVisibility(ImageBox);

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Practice Tasks</h1>

      <h2>HOC Counter</h2>
      <Like />
      <Dislike />

      <hr />

      <h2>Show / Hide HOC</h2>
      <ToggleMessage />
      <ToggleImage />

      <hr />

      <h2>Theme Toggle</h2>
      <LightMode />
      <DarkMode />

      <hr />

      <h2>Even / Odd</h2>
      <EvenOdd />

      <h2>Positive / Negative</h2>
      <CheckNumber />

      <h2>ON / OFF Toggle</h2>
      <ToggleText />

      <h2>Voting Eligibility</h2>
      <Voting />
    </div>
  );
};

export default App;
