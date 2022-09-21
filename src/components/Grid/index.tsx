import { Card } from '../Card';
import { GridProps } from './types';
import { cards } from '../../data/cards';

export const Grid = ({ clickCount }: GridProps): JSX.Element => {
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

  return <>{renderCards()}</>;
};
