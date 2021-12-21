import React from "react";
import { Card, Button } from "react-bootstrap";
import imgURL from './Arham.jpg'
export const About = () => {
  return (
    <div className="aboutCenter">
      <Card style={{ width: "18rem", borderRadius: "18px", background: "rgb(250, 248, 248)" }} className="aboutCard">
        <Card.Img variant="top" src={imgURL} style={{width:"50%"}} className="aboutImage"/>
        <Card.Body className="text-center">
          <Card.Title className="text-center my-3"><h4 style={{color:"#11061A"}}>Arham Khawar</h4></Card.Title>
          <Card.Text className="aboutTitle my-3">
            MERN Developer
          </Card.Text>
          <Card.Text style={{color: "rgba(87, 72, 99,1)"}}>
          Project: iNoteBook
          </Card.Text>
          <Button variant="dark" className="aboutButton mt-2" style={{backgroundColor: "#000"}} href="mailto:ch.arham1220@gmail.com">Contact Me</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
