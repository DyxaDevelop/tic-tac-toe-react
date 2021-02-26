import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      win: [0, 0],
      chosed: 'X',
      remaining: 'O'
    }
  }
  choose = event => {
    this.setState({ remaining: this.state.chosed })
    this.setState({ chosed: event.target.getAttribute('data') })
  }
  clickHandler = event => {
    let data = event.target.getAttribute('data')
    let currentSquares = this.state.squares;
    if (!currentSquares[data]) {
      if (this.state.count % 2 === 0) {
        currentSquares[data] = this.state.chosed;
      } else {
        currentSquares[data] = this.state.remaining;
      }
      this.setState({ squares: currentSquares });
      this.setState({ count: this.state.count + 1 });
    }
    this.isWin(data, currentSquares)
  }
  startNewGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      count: 0,
      chosed: 'X',
      remaining: 'O'
    });
  }
  isWin = (data, currentSquares) => {
    let winnerSquares = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let s = (this.state.count % 2 === 0) ? currentSquares[data] = this.state.chosed : currentSquares[data] = this.state.remaining;
    for (let i = 0; i < 8; i++) {
      let line = winnerSquares[i];
      if (this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
        alert(s + ' WIN');
        if (s === 'X') {
          this.setState({
            win: {
              0: this.state.win[0] + 1,
              1: this.state.win[1]
            }
          })
          this.startNewGame()
        } else {
          this.setState({
            win: {
              0: this.state.win[0],
              1: this.state.win[1] + 1
            }
          })
          this.startNewGame()
        }
      }
    }
  }
  render() {
    return (
      <div className="App-header">
        <p>Choose X or O</p>
        <div className="button-group">
          <button className="player" onClick={this.choose} data="X">X</button>
          <button className="player" onClick={this.choose} data="O">O</button>
        </div>
        <div className="button-group">
          <p>Wins: {this.state.win[0]}</p>
          <p>Wins: {this.state.win[1]}</p>
        </div>
        <button className="new-game" onClick={this.startNewGame}>Start new game</button>
        <p>Chosed: {this.state.chosed}</p>
        <div className="container">
          <div className="ttt" onClick={this.clickHandler} data='0'>{this.state.squares[0]}</div>
          <div className="ttt" onClick={this.clickHandler} data='1'>{this.state.squares[1]}</div>
          <div className="ttt" onClick={this.clickHandler} data='2'>{this.state.squares[2]}</div>
          <div className="ttt" onClick={this.clickHandler} data='3'>{this.state.squares[3]}</div>
          <div className="ttt" onClick={this.clickHandler} data='4'>{this.state.squares[4]}</div>
          <div className="ttt" onClick={this.clickHandler} data='5'>{this.state.squares[5]}</div>
          <div className="ttt" onClick={this.clickHandler} data='6'>{this.state.squares[6]}</div>
          <div className="ttt" onClick={this.clickHandler} data='7'>{this.state.squares[7]}</div>
          <div className="ttt" onClick={this.clickHandler} data='8'>{this.state.squares[8]}</div>
        </div >
      </div>
    );
  }
}

export default App;
