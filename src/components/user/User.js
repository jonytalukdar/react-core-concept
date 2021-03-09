import React from 'react';
import Style from './user.module.css';

const User = (props) => {
  const { name, email, salary } = props.userDetails;
  const handle = props.handle;
  return (
    <div className={Style.user}>
      <div className={Style.img}>
        <img
          src="https://web.programming-hero.com/public/1604764974390.png"
          alt=""
        />
        <br className={Style.br} />
      </div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{salary}</p>
      <button onClick={() => handle(props.userDetails)}>Show Salary</button>
    </div>
  );
};

export default User;
