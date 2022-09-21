import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { cards } from "./data/cards.js";
import { useState } from "react";

export const App = () => {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const gameOver = () => {
    if (score > highscore) setHighscore(score);

    cards.forEach(card => {
      card.count = 0;
    });

    alert(`Game Over :( \nScore: ${score}`);
    setScore(0);
    return true;
  }

  const clickCount = id => {
    cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          setScore(score + 1);
          cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          gameOver();
        }
      }
    });
  }

    return (
      <Wrapper>
        <Header score={score} highscore={highscore}>Clicky Game</Header>
        {cards.map(card => (
          <Card
            clickCount={clickCount}
            id={card.id}
            image={card.image}
            key={card.id}
          />
        ))}
        <Footer />
      </Wrapper>
    );
}
