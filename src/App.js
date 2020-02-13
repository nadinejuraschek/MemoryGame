import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
      </Wrapper>
    );
  }
}

export default App;