import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = (prop) => {
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${prop.id}/places`}>
          <div className='user-item__image'>
            <Avatar image={prop.image} alt={prop.name} />
          </div>
          <div className='user-item__info'>
            <h2>{prop.name}</h2>
            <h3>{prop.placeCount} {prop.placeCount>1? 'places': 'place'}</h3>
          </div>
        </Link>
      </Card>
    </li>
  )
};

export default UserItem;