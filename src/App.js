import React, { useState, useRef } from 'react';
import "./App.css";
import {Auth} from"./components/Auth";
import Cookies from 'universal-cookie';
import {Chat} from "./components/Chat";
import { AppWrapper } from './components/AppWrapper';
const cookies=new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth]= useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat]=useState(null);
  const[room,setRoom]=useState(null);

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </AppWrapper>
  );
}

export default ChatApp;