import Card from './Card';
import features from '../assets/data';
import styles from '../assets/styles/cards.module.scss';

function Cards() {
  return (
    <main className={styles.main}>
      {features.map((feature) => {
        return (
          <Card
            name={feature.name}
            about={feature.about}
            image={feature.image}
            color={feature.color}
          />
        );
      })}
    </main>
  );
}

export default Cards;
