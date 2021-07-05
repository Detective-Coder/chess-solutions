import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { PuzzleProvider } from "../providers/PuzzleProvider";

const Puzzle = ({ puzzle }) => {
  console.log(puzzle);
  const history = useHistory();
  let userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

  return (
    <Card className="m-4">
      <h1>
        <strong>{puzzle.name}</strong>
      </h1>
      {/* <img src={window.location.origin + '../../public/images/puzzle2.png'} /> */}
      <img src={process.env.PUBLIC_URL + `/images/${puzzle.fileDirectory}`} />
      <h2>
        <strong>{puzzle.difficultyLevel}</strong>
      </h2>

        {puzzle.solution.map(solution => (
          <h3>
            <strong>Solution: {puzzle.solution[0].content}</strong>
          </h3>
        ))}

    </Card>
  )
}


export default Puzzle;