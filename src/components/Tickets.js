import { React } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import "./style.css";

var DatePicker = require("reactstrap-date-picker");

function Tickets() {
  return (
    <>
      <MyNavbar />
      <Row className="mainContainer padding">
        <Card className="tickets">
          <Form>
            <FormGroup row>
              <Label for="category" sm={2}>
                Category
              </Label>
              <Col sm={10}>
                <Input type="select" name="select" id="category">
                  <option>---</option>
                  <option>Electrical</option>
                  <option>Plumbing</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>
                Description
              </Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="description" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>
                Attach Photo
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  Attach a photo and send to landlord
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="date">
                Appointment Date
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
            <FormGroup row>
              <Label for="checkbox2" sm={2}>
                Checkbox
              </Label>
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2" /> Check me out
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button className="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Card>
      </Row>
      <Footer />
    </>
  );
}

export default Tickets;
