import React from 'react';
import styles from '../assets/styles/card.module.scss';

type CardProps = {
  name: string;
  about: string;
  image: any;
};

const Card: React.FC<CardProps> = ({ name, about, image }) => {
  return (
    <article className={styles.article}>
      <h2>{name}</h2>
      <h3>{about}</h3>
      <img src={image} alt="main" />
    </article>
  );
};

export default Card;
