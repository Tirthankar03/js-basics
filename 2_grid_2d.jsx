import "./App.css";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState(false);

  const [gridState, setGridState] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  //to toggle, we can't directly set the state of the grid, we need to create a new array and set it to the state
  //we can use the map function to create a new array and set it to the state
  const toggleGrid = (rowIdx, colIdx) => {
    setGridState((prevGrid) =>
      //create a new array with the same values as the previous one
      prevGrid.map((row, i) =>
        //goes through each row and creates a new array with the same values as the previous one
        //and then we check if the row and column index is equal to the one we want to toggle
        //if it is, we toggle the value of the cell, if not we keep the same value
        //on every click, we create a new array and set it to the state
        row.map((col, j) => (i === rowIdx && j === colIdx ? !col : col))
      )
    );
  };

  return (
    <main>
      <div onClick={() => setContent(!content)}>{content ? "Bye" : "Hi"}</div>

      {gridState.map((row, i) => {
        return (
          <div key={i}>
            <div>{i}</div>
            {row.map((col, j) => {
              return (
                <div key={j}>
                  <div onClick={() => toggleGrid(i, j)}>
                    {col ? "Bye" : "Hi"} {i} {j}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}