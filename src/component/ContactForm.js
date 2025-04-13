import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        name: name,
        phoneNumber: phoneNumber,
      },
    });
    setName('');
    setPhoneNumber('');
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력해주세요"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;