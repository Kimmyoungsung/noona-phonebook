import './App.css';
import ContactForm from './component/ContactForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from "./component/ContactList";

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
           <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;