import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import './PlaceForm.css';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
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

  const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = PLACES.find(place => place.id === placeId);

  // why we need setFormData, watch the video of 68: Adjusting the form hook
  useEffect(() => {
    // this if condition is to make sure not returning error when cannot find corresponding identifiedPlace
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      )
    };

    setIsLoading(false)
  }, [identifiedPlace,setFormData]) // setFormData would never change since we use useCallback to define it in form-hook.js; Technically, identifiedPlace would not change as well after we successfully fetch it from database.

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    // console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return <div className='center'>
      <h2>Could not find place!</h2>
    </div>
  }

  // to show initial input correctly when ready to edit
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description (at least 5 characters).'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  )
};

export default UpdatePlace;