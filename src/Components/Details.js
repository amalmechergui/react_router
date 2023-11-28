import React from 'react'
import { Card, Button } from "react-bootstrap"
import { Link, useParams} from "react-router-dom"
import data from "../data"
const Details = () => {
 let{ id } = useParams();
 let specificMovie = data.filter((el) => el.id===id);
  return (
    <div>
     { specificMovie &&
     specificMovie.map((el) =>(
      <Card style={{ width: '900px', margin:"100px auto" }}>
        <iframe src={el.trailer} width="900" height="500"> </iframe>
      <Card.Body>
        <Card.Title>{el.title} </Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <Button variant="primary"> <Link style={{textDecoration:"none",color:"white"}} to={"/"}> Back Home </Link>
        </Button>
      </Card.Body>
    </Card>
     ))}
    </div>
  );
}

export default Details
