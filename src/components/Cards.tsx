import React from 'react';
import Card from './Card';
import team from '../assets/svg/icon-team-builder.svg';

function Cards() {
  return (
    <main>
      <Card
        name={'Team Builder'}
        about={'Scans our talent network to create the optimal team for your project'}
        image={team}
      />
    </main>
  );
}

export default Cards;
