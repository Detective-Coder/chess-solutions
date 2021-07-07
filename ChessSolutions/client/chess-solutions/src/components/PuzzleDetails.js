import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PuzzleContext } from "../providers/PuzzleProvider";
import { useParams } from "react-router-dom";
import Puzzle from "./PuzzleDetailCard";

const PuzzleDetails = () => {
  const [puzzle, setPuzzle] = useState();
  const { getPuzzleWithSolutions } = useContext(PuzzleContext);
  const { id } = useParams();

  useEffect(() => {
    getPuzzleWithSolutions(id).then(setPuzzle);
  }, []);

  if (!puzzle) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Puzzle puzzle={puzzle} setPuzzle={setPuzzle} />
        </div>
      </div>
    </div>
  );
};

export default PuzzleDetails;