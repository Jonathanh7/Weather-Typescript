import React from 'react';

export interface ResultProps {
  temp: number;
  name: string;
  description: string;
  feels_like: number;
  speed: number;
}

const Result: React.FC<ResultProps> = ({ temp, name, description, feels_like, speed }) => {
  return (
    <div className='weatherCard'>
      <h3>{name}</h3>
      <span>Feels Like: {feels_like}&deg;</span>
      <br />
      <span>Current temp: {temp}&deg;</span>
      <br />
      <p>Description: {description}</p>
      <p>Wind speed: {speed}</p>

    </div>
  );
}

export default Result;
