import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = PLACES.find(place => place.id === placeId);

  if (!identifiedPlace) {
    return <div className='center'>
      <h2>Could not find place!</h2>
    </div>
  }

  return (
    <form>
      <Input
        id="title"
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description (at least 5 characters).'
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  )
};

export default UpdatePlace;