import react from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import Logo from "../../../assets/image/logo1.png";
const Header = () => {
  return (
    <>
      <Nav class="navbar  fixed-top navbar-expand-lg navbar_color">
        <Row>
          <Col sm={10}>
            <div className=" logo">
              <img src={Logo} style={{ width: "150px", height: "70px" }} />
              <div class="container-fluid text-white ">Admin</div>
            </div>
          </Col>

          <Col sm={2}>
            <div className="float mt-4  ">
              <p className="icon_size">Location</p>
              <i class="fa fa-bell icon_size ml-2 mr-2 mt-2"></i>
              <p className="icon_size"> Profile</p>
              <i class="fa fa-user icon_size ml-2 mr-2 mt-2"></i>
            </div>
          </Col>
        </Row>
      </Nav>
      {/* <Navbar /> */}
    </>
  );
};
export default Header;
