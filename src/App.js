import './App.css';

import Chessboard from 'chessboardjsx';
import OpeningContainer from './components/containers/OpeningContainer'; 
import CommentContainer from './components/containers/CommentContainer'; 
import NextMoveContainer from './components/containers/NextMoveContainer'; 

function App() {
  return (
    <div className="App">
    <h1>Repertoire Chess</h1>
    <div className="navbar">NavBar</div>
    <div className="front-page">
    <div className="board">
      <div id="opening-bar">
      <OpeningContainer/>
      </div>
      <div>
      <Chessboard position="start" width="475" />
    </div>
    <div id="comment-box">
      <CommentContainer/>
    </div>
    </div>
    <div className="next-move">
      <NextMoveContainer/>
    </div>
    </div>
    </div>
  );
}

export default App;
