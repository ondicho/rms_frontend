import React, { useState } from "react";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Water from "../images/water-tap.png";
import Elec from "../images/idea.png";
import rentImg from "../images/rent.png";
import garbage from "../images/garbage.svg";
import "./style.css";
import { stkpush } from "../Api/Calls";

function Bills() {
  const [rent, setRent] = useState("");
  const [show, setShow] = useState(false);

  const payRent = (e) => {
    e.preventDefault();
    console.log("entry");
    // alert('Payment prompt sent to your registered phone number')
    toggle();
    console.log("mpesa call");
    stkpush().then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      setRent(resp);
    });
  };
  const toggle = (e) => {
    setShow(true);
  };
  const dismiss = (e) => {
    setShow(false);
  };

  return (
    <>
      <MyNavbar />
      <div className="billsContainer">
        <div>
          <Card>
            <CardTitle>Unpaid Bills</CardTitle>
            <CardBody>
              <Table>
                <thead>
                  <tr>
                    <th>Bill</th>
                    <th>Bal</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={rentImg} alt="rent" height="30px" /> Rent
                    </td>
                    <td>Ksh 4,500</td>
                    <td>Ksh 14,500</td>
                    <td>
                      <button className="billButton" onClick={payRent}>
                        pay
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={Water} alt="rent" height="30px" /> Water
                    </td>
                    <td>Ksh 500</td>
                    <td>Ksh 500</td>
                    <td>
                      <button className="billButton" onClick={toggle}>
                        pay
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={garbage} alt="rent" height="30px" /> Garbage
                    </td>
                    <td>Ksh 100</td>
                    <td>Ksh 200</td>
                    <td>
                      <button className="billButton" onClick={payRent}>
                        pay
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Modal isOpen={show} toggle={dismiss}>
            <ModalHeader toggle={dismiss}>Make Payment</ModalHeader>
            <ModalBody>Sending a payment prompt to your phone</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={dismiss}>
                Verify Payment
              </Button>{" "}
              <Button color="secondary" onClick={dismiss}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div>
          {" "}
          <Card>
            <CardTitle>Receipts</CardTitle>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label sm={2} for="date">
                    Payments Done from
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Fundi will visit to fix"
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button className="submit">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bills;
