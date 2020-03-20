import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Create({ handleChange, submitForm, state }) {
  return (
    <Form onSubmit={submitForm}>
      <Form.Group controlId="formBasicTitle">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Control
          type="text"
          placeholder="Enter Description"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Create;
