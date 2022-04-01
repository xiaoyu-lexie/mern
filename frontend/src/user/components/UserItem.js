import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = (prop) => {
  return (
    <li>
      <div>
        <Link to={`/${prop.id}/places`}>
          <img src={prop.image} alt={prop.id}></img>
          <h2>{prop.name}</h2>
          <h3>{prop.placeCount} {prop.placeCount>1? 'places': 'place'}</h3>
        </Link>
      </div>
    </li>
  )
};

export default UserItem;