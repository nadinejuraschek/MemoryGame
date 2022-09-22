import { Footer } from './components/Footer';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Wrapper } from './components/Wrapper';
import { cards } from './data/cards';
import { useState } from 'react';

export const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const gameOver = (): boolean | void => {
    if (score > highscore) setHighscore(score);

    cards.forEach(card => {
      card.count = 0;
    });

    setShowModal(true);
    return true;
  };

  const clickCount = (id: number): boolean | void => {
    cards.find((card, index): boolean | void => {
      if (card.id === id) {
        if (cards[index].count === 0) {
          cards[index].count = cards[index].count + 1;
          setScore(score + 1);
          cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          gameOver();
        }
      }
    });
  };

  const handleClose = (): void => {
    setShowModal(false);
    setScore(0);
  };

  return (
    <Wrapper>
      <Header score={score} highscore={highscore} />
      <Grid clickCount={clickCount} />
      <Footer />
      <>
        {showModal && (
          <Modal
            handleClose={handleClose}
            highscore={highscore}
            score={score}
          />
        )}
      </>
    </Wrapper>
  );
};
