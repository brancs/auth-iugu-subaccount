import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string | null;
  message?: string | null;
}

export default function ErrorPage() {
  const error:RouteError = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page" className="d-grid justify-content-center align-items-center" style={{height: '100vh'}}>
      <div className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  );
}