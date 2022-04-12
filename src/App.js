import logo from "./logo.svg";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import AdminPage from "./component/Admin";
import Header from "./component/shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Row>
        <Col xs md xl sm={3}>
          <Navbar />
        </Col>
        <Col xs sm={9}>
          <AdminPage />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
