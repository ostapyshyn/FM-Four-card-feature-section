import React from 'react';
import styled from 'styled-components';
import styles from '../assets/styles/card.module.scss';

type CardProps = {
  name: string;
  about: string;
  image: any;
  color: string;
};

const Card: React.FC<CardProps> = ({ name, about, image, color }) => {
  return (
    <Article className={styles} color={color}>
      <h2>{name}</h2>
      <h3>{about}</h3>
      <img src={image} alt="main" />
    </Article>
  );
};

export default Card;

const Article = styled.article`
  padding: 32px;
  max-width: 350px;
  box-shadow: 0px 15px 30px -11px rgba(131, 166, 210, 0.5);
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: ${({ color }) => `var(${color})`};
  }
`;
