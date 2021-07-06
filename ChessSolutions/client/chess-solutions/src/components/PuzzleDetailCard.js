import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { PuzzleContext } from "../providers/PuzzleProvider";
import {
  Form,
  FormGroup,
  Card,
  CardImg,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";

const Puzzle = ({ puzzle }) => {
  const [showForm, setShowForm] = useState(false);
  const toggle = () => setShowForm(!showForm);
  console.log(puzzle);
  const history = useHistory();
  let userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
  const {  addSolution } = useContext(PuzzleContext);

  const [solution, setSolution] = useState({});

  const handleSaveSolution = () => {

  }

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
          <h3 key={solution.content}>
            <strong>Solution: {solution.content}</strong>
          </h3>
        ))}

        <button onClick={toggle}>Add Solution</button>
        
        { showForm
            ? <Form>
                <FormGroup>
                  <Label for="solution">Solution</Label>
                  <Input id="solution" name="solution" />
                </FormGroup>
                <FormGroup>
                  <button onClick={handleSaveSolution}>Submit Solution</button>
                </FormGroup>
              </Form> 
              : 
              <div>

              </div>
        }


    </Card>
  )
}
// {isLoggedIn
//   ? <LogoutButton onClick={this.handleLogoutClick} />
//   : <LoginButton onClick={this.handleLoginClick} />
// }

export default Puzzle;