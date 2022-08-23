import React, { useState, useEffect ,useRef} from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Input,
  InputGroup,
  Alert
} from "reactstrap";
import { stkpush } from "../Api's/Calls";
import "./style.css";

function Dashboard() {
  const [rent, setRent] = useState("");
  const ref = useRef(null);



  // useEffect(()=>{
  //   stkpush().then((res)=>{
  //     let resp=JSON.parse(JSON.stringify(res));
  //     setRent(resp);

  //   })
  // },[]);
  const payRent = (e) => {
    e.preventDefault();
    // alert('Payment prompt sent to your registered phone number')
    ref.current="test"
    console.log(ref.current)

    stkpush().then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      setRent(resp);
    });
    


    // ref.current.text=<Alert color="success">
    //     Payment prompt sent to your registered phone number
    //   </Alert>
  };
  return (
    <>
    <Row>
      <div className="alerts" ref={ref}></div>
      <Col sm={4}>
        <Card
          body
          className="my-2 paymentCards"
          style={{
            width: "18rem",
          }}
        >
          <CardTitle tag="h5">Rent</CardTitle>
          <CardText>Rent Due : Ksh 14500</CardText>
          <Button color="secondary" onClick={payRent} className="btn">
            Pay Rent
          </Button>
        </Card>
      </Col>
      <Col sm={4}>
        <Card
          body
          className="my-2 paymentCards"
          style={{
            width: "18rem",
          }}
        >
          <CardTitle tag="h5">Water</CardTitle>
          <CardText>Water Bill : Ksh 400</CardText>
          <Button color="secondary" className="btn">
            Pay Water
          </Button>
        </Card>
      </Col>
      <Col sm={4}>
        <Card
          body
          className="my-2 paymentCards"
          style={{
            width: "18rem",
          }}
        >
          <CardTitle tag="h5">Electricity</CardTitle>
          <CardText>
            <InputGroup>
              <Input placeholder="Amount" />
            </InputGroup>
          </CardText>
          <Button color="secondary" className="btn">
            Buy Tokens
          </Button>
        </Card>
      </Col>
    </Row>
    </>
  );
}

export default Dashboard;
