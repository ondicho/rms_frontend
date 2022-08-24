import React from "react";
import { Col, Form, FormGroup, Input, Label, Card , Button} from "reactstrap";
import "./style.css";

function Login() {
  return (
    <>
      <Card className="mainContainer login">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup className="loginButton">
            <Button color="secondary">Login</Button>
          </FormGroup>
        </Form>
      </Card>
    </>
  );
}

export default Login;
