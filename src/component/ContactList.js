import React, { useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const [keyword, setKeyword] = useState('');
  const [sorted, setSorted] = useState(false);

  const filteredList = contactList
    .filter((contact) =>
      contact.name.toLowerCase().includes(keyword.toLowerCase())
    )
    .sort((a, b) => {
      if (!sorted) return 0;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="contact-list">
      <SearchBox keyword={keyword} setKeyword={setKeyword} />
      <div className="button-group">
        <Button variant="success" onClick={() => setSorted(true)}>
          이름순 정렬
        </Button>
        <Button variant="secondary" onClick={() => setSorted(false)}>
          정렬 초기화
        </Button>
      </div>
      {filteredList.map((item, index) => {
        if (!item || !item.name || !item.phoneNumber) return null;
        return (
          <ContactItem
            key={index}
            name={item.name}
            phoneNumber={item.phoneNumber}
          />
        );
      })}
    </div>
  );
};

export default ContactList;