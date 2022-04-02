import React from 'react';
import UserItem from './UserItem'

import './UserList.css'

const UserList = (prop) => {
  if (prop.items.length === 0) {
    return (
      <h2>No users found.</h2>
    )
  };

  return (
    <ul className='users-list'>
      {prop.items.map(user => (
          <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
          />
        )
      )}
    </ul>
  )
}

export default UserList;