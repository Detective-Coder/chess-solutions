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
    </Card>
  )
}

export default Puzzle;