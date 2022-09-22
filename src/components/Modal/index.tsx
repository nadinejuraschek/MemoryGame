import './Modal.css';

import { ModalProps } from './types';

export const Modal = ({
  handleClose,
  highscore,
  score,
}: ModalProps): JSX.Element => (
  <div className='overlay'>
    <div className='modal'>
      <h2 className='title'>Game Over</h2>
      <p>You scored: {score} points</p>
      <p>Your current highscore: {highscore} points</p>
      <button onClick={handleClose}>Play Again</button>
    </div>
  </div>
);
