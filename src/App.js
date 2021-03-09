import React, { useEffect, useState } from 'react';
import Count from './components/count/Count';
import User from './components/user/User';
import Fake from './fakeData/fake.json';

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(Fake);
  });

  const [count, setCount] = useState([]);
  const handle = (userDetails) => {
    const newCount = [...count, userDetails];
    setCount(newCount);
  };

  return (
    <div>
      <h3>count : {count.length}</h3>
      <Count cart={count}></Count>
      <h1 style={{ textAlign: 'center' }}>user length : {user.length}</h1>
      {user.map((list) => (
        <User userDetails={list} handle={handle} key={list.id}></User>
      ))}
    </div>
  );
};

export default App;
