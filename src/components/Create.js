import React from "react";
import { Form, Button } from "react-bootstrap";

function Create({ handleChange, submitForm, state }) {
  const { title, description } = state;

  return(
    <Form onSubmit={submitForm}>
     <Form.Group className="mb-3" controlId="formBookTitle">
      <Form.Control 
          type="text" 
          name="title"
          placeholder="Enter your book title" 
          value={title}
          onChange={handleChange}
      />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBookDescription">
      <Form.Control 
          type="text" 
          name="description"
          placeholder="Enter your book description" 
          value={description}
          onChange={handleChange}
      />
      </Form.Group>
     <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default Create;
