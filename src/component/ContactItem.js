import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ name, phoneNumber }) => {
  if (!name || !phoneNumber) {
    return null; // 유효하지 않으면 아무것도 렌더링하지 않음
  }

  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
          alt="profile"
        />
      </Col>
      <Col lg={11}>
        <div>{name}</div>
        <div>{phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;