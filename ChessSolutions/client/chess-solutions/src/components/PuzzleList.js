import React, { useContext, useEffect, useState } from "react";
import { PuzzleContext } from "../providers/PuzzleProvider";
import Puzzle from "./Puzzle";
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const PuzzleList = () => {
  const { puzzles, getAllPuzzles } = useContext(PuzzleContext);

  useEffect(() => {
    getAllPuzzles();
  }, []);

  return (

    <Container className="mt-5">
      <Row>
        <Col>        
          <h2>Beginner Puzzles</h2>
          <p style={{ margin: '0 auto', width: '10rem' }}>1 - 10</p>
        </Col>
        <Col>        
          <h2>Intermediate Puzzles</h2>
          <p style={{ margin: '0 auto', width: '10rem' }}>11 - 20</p>
        </Col>
        <Col>        
          <h2>Advanced Puzzles</h2>
          <p style={{ margin: '0 auto', width: '10rem' }}>21 - 30</p>
        </Col>
      </Row>
      <Row>
        <Col xs="6" style={{ backgroundColor: "#007bff" }}>
          <Card>
            <CardBody>
              {puzzles.map((puzzle) => (
                <>
                  <CardTitle>
                    <Puzzle key={puzzle.id} puzzle={puzzle} />
                  </CardTitle>
                  <Button color="primary" style={{ width: '5rem' }}>
                    <Link to={`/puzzle/${puzzle.id}/solutions`} className="text-white">View</Link>
                  </Button>
                </>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PuzzleList;