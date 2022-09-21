import './Card.css';

import { CardProps } from './types';

export const Card = ({ clickCount, id, image }: CardProps): JSX.Element => (
  <div className='card' onClick={() => clickCount(id)}>
    <img alt={id.toString()} src={image} />
  </div>
);
