import { useState } from "react";
import { SweaterSVG } from "./SweaterSVG";
import { squares } from "./state";

const colors = {
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
  color: "#a199a9",
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
        </div>
      </div>
      <div className="sweater-container">
        <SweaterSVG state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
