import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'lexie',
      image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmNZJSzdqEIMq4mFCF6WqqVm3fhvrROHdV2RCPtWVW1y6589u2UdvnlJIxjA29ge8UgA&usqp=CAU',
      places: 3
    }
  ]

  return (
    <UserList items={USERS}/>
  )
};

export default Users