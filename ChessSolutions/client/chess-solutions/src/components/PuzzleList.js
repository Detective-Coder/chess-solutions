import React, { useContext, useEffect, useState } from "react";
import { PuzzleContext } from "../providers/PuzzleProvider";
import Puzzle from "./Puzzle";
import { Link } from 'react-router-dom';

const PuzzleList = () => {
  const { puzzles, getAllPuzzles } = useContext(PuzzleContext);

  useEffect(() => {
    getAllPuzzles();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {puzzles.map((puzzle) => (
            <>
              <Puzzle key={puzzle.id} puzzle={puzzle} />
              <Link to={`/puzzle/${puzzle.id}`}>View Puzzle</Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PuzzleList;