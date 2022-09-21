import './Header.css';

import { HeaderProps } from './types';

export const Header = ({ highscore, score }: HeaderProps): JSX.Element => (
  <div className='header'>
    <div className='title'>Memory Game</div>
    <div className='scores'>
      <span className='space'>Score: {score}</span>
      <span>Highscore: {highscore}</span>
    </div>
  </div>
);
