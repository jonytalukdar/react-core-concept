import React from 'react';

const Bio = (props) => {
  const { name, title } = props;
  return (
    <div className="bio">
      <h2>{name}</h2>
      <h4>{title}</h4>
    </div>
  );
};

export default Bio;
