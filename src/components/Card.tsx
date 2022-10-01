import React from 'react';
import styles from '../assets/styles/card.module.scss';

type CardProps = {
  name: string;
  about: string;
  image: any;
  color: string;
};

const Card: React.FC<CardProps> = ({ name, about, image, color }) => {
  return (
    <article className={styles.article} style={{ borderTopColor: `var(${color})` }}>
      <h2>{name}</h2>
      <h3>{about}</h3>
      <img src={image} alt="main" />
    </article>
  );
};

export default Card;
