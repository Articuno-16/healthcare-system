import { Container, Row, Col } from "react-bootstrap";
// import Row from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-5">
      <Container className="text-white py-5">
        <Row>
          <Col>
            <h2>DOCMED</h2>
            <p>
              Firmament morning sixth subdue darkness creeping gathered divide.
            </p>
          </Col>
          <Col>
            <h2>Departments</h2>
            <p>Eye</p>
            <p>Skin</p>
            <p>Pathology</p>
            <p>Medicine</p>
          </Col>
          <Col>
            <h2>Useful Links</h2>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Appoinment</p>
          </Col>
          <Col>
            <h2>Address</h2>
            <p>200, D-block, Green lane USA</p>
            <p>+10 367 467 8934</p>
            <p>docmed@contact.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
