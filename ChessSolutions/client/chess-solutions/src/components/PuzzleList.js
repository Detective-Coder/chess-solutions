import React, { useContext, useEffect, useState } from "react";
import { PuzzleContext } from "../providers/PuzzleProvider";
import Puzzle from "./Puzzle";
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';

const PuzzleList = () => {
  const { puzzles, getAllPuzzles } = useContext(PuzzleContext);

  useEffect(() => {
    getAllPuzzles();
  }, []);

  return (
    // <div className="container">
    //   <div className="row justify-content-center">
    //     <div className="cards-column">
    //       <h2>Beginner Puzzles</h2>
    //       <p>1 - 10</p>
    //       <h2>Intermediate Puzzles</h2>
    //       <p>11 - 20</p>
    //       <h2>Advanced Puzzles</h2>
    //       <p>21 - 30</p>
    //       {puzzles.map((puzzle) => (
    //         <>
    //           <Puzzle key={puzzle.id} puzzle={puzzle} />
    //           <Button color="primary">
    //             <Link to={`/puzzle/${puzzle.id}/solutions`} className="text-white">View Puzzle</Link>
    //           </Button>
    //         </>
    //       ))}
    //     </div>
    //   </div>

    // </div>
    <Container>
      <Row>
        
      </Row>
    </Container>
  );
};

export default PuzzleList;