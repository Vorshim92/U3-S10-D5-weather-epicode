import "./App.css";
import PhoneMockup from "./components/PhoneMockup";
import Meteoapp from "./components/MainPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="d-flex align-items-center justify-content-center">
        <PhoneMockup>
          <Meteoapp></Meteoapp>
        </PhoneMockup>
      </Container>
    </>
  );
}
export default App;
