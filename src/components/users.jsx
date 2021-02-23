import React, { useEffect, useState } from 'react';

function Users() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Users: {user.length}</h1>
      <ul>
        {user.map((list) => (
          <li>{list.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
