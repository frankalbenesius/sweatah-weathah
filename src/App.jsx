import { useState } from "react";
import { SweaterSVG } from "./SweaterSVG";
import { squares } from "./state";

const colors = {
  WHITE: "#ffffff",
  "478 Amber": "#b44d1f",
  "620 Lilac": "#a199a9",
  "410 Cornfield": "#d78e18",
  "240 Yell Sound Blue": "#809595",
  "103 Sholmit": "#76746a",
  "580 Cherry": "#641625",
  "791 Pistachio": "#918646",
  "665 Bluebell": "#526c9f",
  "271 Flame": "#d36456",
};

const defaultState = {
  color: colors["478 Amber"],
  borders: true,
  squares: squares.map((sq) => ({
    ...sq,
    color: "white",
  })),
};

function App() {
  const [state, setState] = useState({
    ...defaultState,
  });

  const randomizeSquareColors = () => {
    function shuffle(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const colorValues = Object.values(colors).filter((c) => c !== colors.WHITE);
    shuffle(colorValues);
    const arrayOfColors = [];
    for (let i = 0; i < state.squares.length; i++) {
      arrayOfColors.push(colorValues[i % colorValues.length]);
    }
    shuffle(arrayOfColors);
    setState((s) => ({
      ...s,
      squares: arrayOfColors.map((color, i) => ({
        ...s.squares[i],
        color,
      })),
    }));
  };

  return (
    <div className="app">
      <div className="controls">
        <div className="title">amanda&#39;s sweater color picker</div>

        <div className="color-selector">
          {Object.keys(colors).map((color) => (
            <button
              key={color}
              className="color-selector-item"
              style={{
                color: color === "WHITE" ? "black" : "white",
                background: colors[color],
                border: `2px dashed ${colors[color]}`,
                borderColor:
                  state.color === colors[color] ? "white" : colors[color],
              }}
              onClick={() => setState({ ...state, color: colors[color] })}
            >
              {color}
            </button>
          ))}
        </div>
        <div className="buttons">
          <button
            onClick={() =>
              setState((s) => ({
                ...s,
                squares: defaultState.squares,
              }))
            }
          >
            Reset colors
          </button>
          <button
            onClick={() => setState({ ...state, borders: !state.borders })}
          >
            Toggle Borders
          </button>
          <button onClick={randomizeSquareColors}>randomize</button>
        </div>
      </div>
      <div className="sweater-container">
        <SweaterSVG state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
