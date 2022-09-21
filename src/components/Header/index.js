import "./Header.css";

export const Header = ({ children, highscore, score }) => (
  <div className="header">
    <div className="title">{children}</div>
    <div className="scores">
      <span className="space">Score: {score}</span>
      <span>Highscore: {highscore}</span>
    </div>
  </div>
);
