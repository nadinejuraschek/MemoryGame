import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { cards } from './data/cards';
import { useState } from 'react';

export const App = (): JSX.Element => {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const gameOver = (): boolean => {
    if (score > highscore) setHighscore(score);

    cards.forEach(card => {
      card.count = 0;
    });

    alert(`Game Over :( \nScore: ${score}`);
    setScore(0);
    return true;
  };

  const clickCount = (id: number): boolean | void => {
    cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          setScore(score + 1);
          cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          gameOver();
        }
      }
    });
  };

  const renderCards: Function = (): JSX.Element[] => {
    return cards.map(
      (card): JSX.Element => (
        <Card
          clickCount={clickCount}
          id={card.id}
          image={card.image}
          key={card.id}
        />
      )
    );
  };

  return (
    <Wrapper>
      <Header score={score} highscore={highscore} />
      {renderCards()}
      <Footer />
    </Wrapper>
  );
};
