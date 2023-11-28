import React from 'react'
import {Dropdown , DropdownButton, Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {

  return (
    <div> <Navbar bg="dark" data-bs-theme="dark" style={{ width: "100%"}}>
    <Container>
      <Navbar.Brand href="#home">Movie App</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#home">Serie TV</Nav.Link>
        <Nav.Link href="#features">Film</Nav.Link>
    
        <DropdownButton id="dropdown-basic-button" title="Categorie">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Anime</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Classics</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Comedy</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Horror</Dropdown.Item>
    </DropdownButton>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Navigation