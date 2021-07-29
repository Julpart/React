import logo from './logo.svg';
import './App.css';
import {Message} from  './Message';
const myText = 'React';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text">
          Lesson 1
        </p>

      </header>
      <Message text ={myText} />
    </div>
  );
}

export default App;
