/* eslint-disable  */

export const SweaterSVG = ({ state, setState }) => {
  return (
    <svg
      width="100%"
      viewBox="0 0 1867 1167"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#clip0_447_126)"
        stroke="black"
        strokeWidth={state.borders ? "6" : "0"}
        strokeMiterlimit="10"
      >
        {state.squares.map((square, i) => (
          <path
            key={i}
            d={square.path}
            fill={square.color}
            className="square"
            onClick={() =>
              setState((state) => {
                const curSquareColor = state.squares[i].color;
                if (curSquareColor === state.color) {
                  return {
                    ...state,
                    squares: state.squares.map((sq, idx) => {
                      if (
                        square.row === sq.row &&
                        square.col % 2 === sq.col % 2
                      ) {
                        return {
                          ...sq,
                          color: state.color,
                        };
                      }
                      return sq;
                    }),
                  };
                } else {
                  return {
                    ...state,
                    squares: state.squares.map((sq, idx) => {
                      if (idx === i) {
                        return {
                          ...sq,
                          color: state.color,
                        };
                      }
                      return sq;
                    }),
                  };
                }
              })
            }
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_447_126">
          <rect width="1866.69" height="1166.98" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
