import React from 'react';

const JokeCard = ({ joke, punchline }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', margin: '10px' }}>
      <h3>{joke}</h3>
      <p><strong>{punchline}</strong></p>
    </div>
  );
};

export default JokeCard;
