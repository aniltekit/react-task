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
      <Row xs={12}>
        <Col xs={2}>
          <Navbar />
        </Col>
        <Col xs={9} className="ml-4">
          <AdminPage />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
