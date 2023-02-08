import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <Container fluid style={{height: '100vh'}}>
      <Row>
        <Col xs lg={3}>
          <h1>
            Brand 
          </h1>
          <Link to={'/'}>
            Root
          </Link> <br />
          <Link to={'/settings'}>
            Settings
          </Link>
        </Col>
        <Col xs lg={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}