import React from 'react';
import Button from '../components/Buttons';
import { FaStar } from 'react-icons/fa';

const ButtonContainer = ({rating}) => {
  return (
    <div className=" btn">
      <Button label="JOIN" onClick={() => console.log('Join clicked')} />
      <Button label="SPECTATE" onClick={() => console.log('Spectate clicked')} />
      <Button label="JOIN AS COMMANDER" onClick={() => console.log('Join as Commander clicked')} />
      <Button
        label={rating}
        icon={<FaStar className="text-yellow-500" />}
        onClick={() => console.log('Star button clicked')}
      />
    </div>
  );
};

export default ButtonContainer;
