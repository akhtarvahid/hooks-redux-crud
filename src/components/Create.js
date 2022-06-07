import React from "react";
import { Form, Button } from "react-bootstrap";

function Create({ handleChange, submitForm, state }) {
  const { title, description } = state;

  return(
    <Form onSubmit={submitForm}>
     <Form.Group className="mb-3" controlId="formBookTitle">
      <Form.Label>Enter Title</Form.Label>
      <Form.Control 
          type="text" 
          name="title"
          placeholder="Book title" 
          value={title}
          onChange={handleChange}
      />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBookDescription">
      <Form.Label>Enter description</Form.Label>
      <Form.Control 
          type="text" 
          name="description"
          placeholder="Enter book description" 
          value={description}
          onChange={handleChange}
      />
      </Form.Group>
     <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default Create;
