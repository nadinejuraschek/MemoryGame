import './Header.css';

import { HeaderProps } from './types';

export const Header = ({ highscore, score }: HeaderProps): JSX.Element => (
  <div className='header'>
    <h1 className='title'>Memory Game</h1>
    <div className='scores'>
      <span className='space'>Score: {score}</span>
      <span>Highscore: {highscore}</span>
    </div>
  </div>
);
