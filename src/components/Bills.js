import Footer from "./Footer";
import MyNavbar from "./Navbar";
import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import Water from "../images/water-tap.png";
import Elec from "../images/idea.png";
import rent from "../images/rent.png";
import garbage from "../images/garbage.svg";
import "./style.css";

function Bills() {
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
                    <th>#</th>
                    <th>Bill</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <img src={rent} alt="rent" height="40px" /> Rent
                    </td>
                    <td>Ksh 14,500</td>
                    <td>
                      <button className="btn">pay</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <img src={Water} alt="rent" height="40px" /> Water
                    </td>
                    <td>Ksh 500</td>
                    <td>
                      <button className="btn">pay</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <img src={garbage} alt="rent" height="40px" /> Garbage
                    </td>
                    <td>Ksh 200</td>
                    <td>
                      <button className="btn">pay</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
        <div>
          {" "}
          <Card>
            <CardTitle>Receipts</CardTitle>
            <CardBody></CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bills;
