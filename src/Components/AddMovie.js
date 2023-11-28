import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";

const AddMovie = ({ Adding, movies, setMovies }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({});

  const changeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const saveMovieHandler = () => {
    
    setMovies([...movies, newMovie]);
    handleClose();
  };

  return (
    <div>
      <Button className="add" variant="dark" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter Movie Title"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter your Description"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ImageUrl</Form.Label>
              <Form.Control
                name="posterURL"
                type="text"
                placeholder="Enter your ImageUrl"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          
              <Form.Label>TrailerURL</Form.Label>
              <Form.Control
                name="trailer"
                type="text"
                placeholder="Enter Movie TrailerURL"
                onChange={changeHandler}
              />
            </Form.Group>
            <Rating
              name="simple-controlled"
              max={10}
              value={newMovie.rating}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveMovieHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;