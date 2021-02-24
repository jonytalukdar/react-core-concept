import React, { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/photos';
const Api = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div style={{ margin: '0 auto' }}>
      {user.map((list) => (
        <img src={list.thumbnailUrl} alt="" />
      ))}
    </div>
  );
};

export default Api;
