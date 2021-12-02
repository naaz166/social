import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
function Add(props) {
  const [state, setState] = useState({
    id: 0,
    task: "",
    completed: false,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(state);
    toastr.success("Added to list !");
    setState({
      id: 0,
      task: "",
      completed: false,
    });
  };
  const handleChange = (event) => {
    const newState = { ...state };
    if (event.target.name === "completed") {
      newState[event.target.name] = !state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    setState(newState);
  };
  return (
    <div className="container">
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group controlId="taskID">
          <Form.Label>Task ID</Form.Label>
          <Form.Control
            name="id"
            type="number"
            value={state.id}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="task"
            type="text"
            value={state.task}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="complete">
          <Form.Label>Complete?</Form.Label>
          <Form.Control
            name="completed"
            type="checkbox"
            value={state.completed}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;