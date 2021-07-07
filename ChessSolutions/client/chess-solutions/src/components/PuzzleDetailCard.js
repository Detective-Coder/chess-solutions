import React, { useState, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { PuzzleContext } from "../providers/PuzzleProvider";
import { SolutionContext } from "../providers/SolutionProvider";
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

const Puzzle = ({ puzzle, setPuzzle }) => {
  const { getPuzzleWithSolutions } = useContext(PuzzleContext);
  const [showForm, setShowForm] = useState(false);
  const toggle = () => setShowForm(!showForm);
  console.log(puzzle);
  const history = useHistory();
  const {id} = useParams();

  let userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

  const { addSolution } = useContext(SolutionContext);


  const [solution, setSolution] = useState({});

  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newSolution = { ...solution }
    //animal is an object with properties.
    //set the property to the new value
    newSolution[event.target.id] = event.target.value
    //update state
    setSolution(newSolution)
  }

    const handleSaveSolution = () => {
      addSolution({
        content: solution.content,
        userProfileId: +userProfile.id,
        puzzleId: +id,
        date: new Date()
      })
      .then(() => {
        return getPuzzleWithSolutions(+id)
      })
      .then((p) => {
        console.log(p)
        setPuzzle(p)
        setShowForm(false)
      })
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
            <strong>Solution: {solution?.content}</strong>
          </h3>
        ))}

        <button onClick={toggle}>Add Solution</button>
        
        { showForm
            ? <Form>
                <FormGroup>
                  <Label for="solution">Solution</Label>
                  <Input id="content" name="solution" value={solution.content} onChange={handleControlledInputChange} />
                </FormGroup>
                <FormGroup>
                  <button onClick={event => {
                    event.preventDefault()
                    handleSaveSolution()
                  }}>Submit Solution</button>
                </FormGroup>
              </Form> 
              : 
              <div>

              </div>
        }


    </Card>
  )
}

export default Puzzle;