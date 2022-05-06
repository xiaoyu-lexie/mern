import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList'

const UserPlaces = () => {
  const PLACES = [
    {
      id: 'p1',
      title: 'stanford university',
      description: 'One of the best university',
      imageUrl:'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
      address: '450 Serra Mall, Stanford, CA 94305',
      location: {
        lat: 37.4274787,
        lng: -122.1719077
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'stanford university',
      description: 'One of the best university',
      imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
      address: '450 Serra Mall, Stanford, CA 94305',
      location: {
        lat: 37.4274787,
        lng: -122.1719077
      },
      creator: 'u2'
    }
  ];

  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter(place => (
    place.creator === userId
  ))


  return <PlaceList items={loadedPlaces} key={userId}/>
};

export default UserPlaces;