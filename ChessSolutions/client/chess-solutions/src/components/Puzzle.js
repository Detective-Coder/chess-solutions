import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Puzzle = ({ puzzle }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">{puzzle.name}</p>
    </Card>
  );
};

export default Puzzle;