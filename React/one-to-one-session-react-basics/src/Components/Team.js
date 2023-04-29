import React from 'react';

function Team({ name, image, role, email }) {
  return (
    <div className='team_div'>
      <h1>{name}</h1>
      <img src={image} alt='' />
      <h2>{role}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Team;
