import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBox = ({ keyword, setKeyword }) => {
  return (
    <div className="search-box">
      <Form.Control
        type="text"
        placeholder="이름으로 검색"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;