import React, { useState } from "react";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import { Link } from "react-router-dom";
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
import receivedPayment from "../images/received.png";
import rentImg from "../images/rent.png";
import garbage from "../images/garbage.svg";
import "./src/styles/style.css";
import { stkpush, authorize } from "../Api/Calls";

function Bills() {
  const [rent, setRent] = useState("");
  const [show, setShow] = useState(false);
  const [showAccept, setShowAccept] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);
  const [paidCode, setPaidCode] = useState(0);

  const [rentAmount, Wateramount] = [14500, 500];

  const payRent = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("amount", "14500");
    // stkpush().then((res) => {
    //   let resp = JSON.parse(JSON.stringify(res));
    //   setRent(resp);
    // });
    authorize(data).then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      toggle();
      setPaidAmount(resp["Amount"]);
      setPaidCode(resp["MpesaReceiptNumber"]);
      console.log("payment successful");
      console.log(resp);
    });
  };
  const toggle = (e) => {
    setShow(true);
  };
  const dismiss = (e) => {
    setShow(false);
  };

  const dismissAccept = (e) => {
    setShowAccept(false);
  };

  const toggleAccept = (e) => {
    setShowAccept(true);
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
              <Button
                color="primary"
                onClick={() => {
                  dismiss();
                  toggleAccept();
                }}
              >
                Verify Payment
              </Button>{" "}
              <Button color="secondary" onClick={dismiss}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          {/* payment received modal */}
          <Modal
            isOpen={showAccept}
            toggle={dismissAccept}
            className="paymentReceived"
          >
            <ModalHeader toggle={dismissAccept}></ModalHeader>
            <ModalBody>
              <p>Payment Sent</p>
              <div className="accept-icon">
                <img src={receivedPayment} alt="payment received" />
              </div>
              <p>Sent Ksh {paidAmount} For Rent</p>
              <p>Mpesa Ref : {paidCode}</p>
          
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={dismissAccept}>
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
                    <Link to="/receipts">
                      <Button>Submit</Button>
                    </Link>
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
