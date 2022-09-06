import React, { useRef, useState } from "react";
import {
  Button, Card,
  CardText,
  CardTitle, Col, Input,
  InputGroup, Row
} from "reactstrap";
import { stkpush } from "../Api's/Calls";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import "./style.css";
import Water from "../images/water-tap.png";
import Elec from "../images/idea.png";
import house from "../images/rent.png";
import garbage from "../images/garbage.svg";

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
    ref.current = "test";
    console.log(ref.current);

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
      <MyNavbar />
      <Row className="mainContainer ">
        {/* <Col sm={4}>
          <Card
            id="paymenytCard1"
            body
            className="my-2 paymentCards"
            style={{
              width: "18rem",
            }}
          >
            <CardTitle tag="h5">Rent</CardTitle>
            <CardText>Rent Due : Ksh 14500</CardText>
            <Button color="secondary" onClick={payRent} className="paymentbtn">
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
            <Button color="secondary" className="paymentbtn">
              Pay Water
            </Button>
          </Card>
        </Col>
        <Col sm={4}>
          <Card
            body
            className="my-2 paymentCards last"
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
            <Button color="secondary" className="paymentbtn">
              Buy Tokens
            </Button>
          </Card>
        </Col> */}
        <div className="services-container">
            <div className="services">
              <img src={house} alt="rent" height="100px" />
            </div>
            <div className=" services">
              <img src={Water} alt="water" height="100px" />
            </div>
            <div className="services">
              <img src={Elec} alt="electricity" height="100px" />
            </div>
            <div className="services">
              <img src={garbage} alt="garbage" height="100px" />
            </div>
          </div>
        <div className="my-board">
          <h2>My Board</h2>
        </div>
      </Row>
      <Footer />
    </>
  );
}

export default Dashboard;
