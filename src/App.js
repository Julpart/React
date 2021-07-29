import logo from './logo.svg';
import './App.css';
import { Message } from './Message';
import React, { useCallback, useEffect, useState } from 'react';

const myText = 'React';

let mes;

function App() {
  

  const [messageList, setMessageList] = useState([]);



  const handleChange = () => {
    const newMessage = { author: "Me", text: mes}
    setMessageList([...messageList, newMessage])  
  }

  useEffect (()=>{
    if(messageList.length && messageList[messageList.length - 1].author !== 'Robot'){
      const RobotMess = {author: "Robot", text: "Ответ"};
      setMessageList([...messageList, RobotMess]);
    }
  },[messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <div >
          <form className="App-form">
            <input id="message" type="text" className="App-message"    />
            <input className="App-button" type="button" value="Отправить" onClick={()=>{
              mes = document.getElementById("message").value;
              handleChange();
              
            }} />
          </form>
        </div>
        <p className="App-text">
          Lesson 2
        </p>
        {messageList.map((mes) => (
          <div>{mes.author}: {mes.text}</div>
        ))}

      </header>
      <Message text={myText} />
    </div>
  );
}

export default App;
