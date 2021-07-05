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
          <h2>Beginner Puzzles</h2>
          <p>1 - 10</p>
          <h2>Intermediate Puzzles</h2>
          <p>11 - 20</p>
          <h2>Advanced Puzzles</h2>
          <p>21 - 30</p>
          {puzzles.map((puzzle) => (
            <>
              <Puzzle key={puzzle.id} puzzle={puzzle} />
              <Link to={`/puzzle/${puzzle.id}/solutions`}>View Puzzle</Link>
            </>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PuzzleList;