import React from "react";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      <span className="space">Score: {props.score}</span>
      <span>Highscore: {props.highscore}</span>
    </div>
  </div>
);

export default Header;
