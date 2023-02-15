import { ReactNode } from "react"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DashboardNav from "./nav/dashboardNav";

type DashboardLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children } : DashboardLayoutProps) {
  return (
    <Container fluid style={{height: '100vh'}}>
      <Row>
        <Col xs lg={2}>
          <DashboardNav />
        </Col>
        <Col xs lg={10} className='bg-light'>
          {children}
        </Col>
      </Row>
    </Container>
  )
}