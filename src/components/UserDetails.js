import React, {useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const UserDetails = () => {
    const [data, setData] = useState({name: "", email: ""});
  const getDetails =async ()=>{
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
      
    });

    const json = await response.json();
    const {name,email} = json;
    setData({name,email});
  }
    useEffect(()=>{
    getDetails();
    // eslint-disable-next-line
  },[]);
    return (
    <>
      <div className="container light-shadow">
        <h2 className="text-center">User Details</h2>
        <Form className="my-3" style={{paddingLeft: '1.15em', paddingRight: '1.15em'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span className="font-weight-bold font-size-increase">Name</span>
            </Form.Label>
            <Form.Control type="text" value={data.name} readOnly />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <span className="font-weight-bold font-size-increase">
                Email
              </span>
            </Form.Label>
            <Form.Control type="text" value={data.email} readOnly/>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default UserDetails;
