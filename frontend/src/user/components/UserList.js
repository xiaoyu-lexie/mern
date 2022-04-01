import React from 'react';
import UserItem from './UserItem'

const UserList = (prop) => {
  return (
    <div>
      {prop.items.map(user => {
        return (
          <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
          />
        )
      })}
    </div>
  )
}

export default UserList;