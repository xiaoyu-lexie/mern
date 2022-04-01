import React from 'react';

const UserItem = (prop) => {
  return (
    <li>
      <div>
        <img src={prop.image} alt={prop.id}></img>
        <h2>{prop.name}</h2>
        <h3>{prop.placeCount} {prop.placeCount>1? 'places': 'place'}</h3>
      </div>
    </li>
  )
};

export default UserItem;