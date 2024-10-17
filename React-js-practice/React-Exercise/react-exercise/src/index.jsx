import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import star from './assets/Images/star.png';
import search from './assets/Images/search-symbol.png';
import userone from './assets/Images/profile-1.jpeg';
import usertwo from './assets/Images/profile-2.jpg';
import userthree from './assets/Images/profile-3.jpg';
import userfour from './assets/Images/profile-4.jpg';
import userfive from './assets/Images/profile-5.jpg';
import usersix from './assets/Images/profile-6.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Search = () => {
  return (
    <header>
      <input type="search" placeholder='Search...' />
      <img src={search} alt="search symbol" />
    </header>
  )
}

const Messenger = (props) => {
  return (
    <section className='chat'>
      <div className='chat__user'>
        <img src={props.image} alt="user" />
        <div>
          <h3>{props.userName}</h3>
          <p>{props.chat}</p>
        </div>
      </div>
      <div className='chat__time'>
        <p>{props.time}</p>
        <img src={star} alt="Star" />
      </div>
    </section>
  )
}

var chatList = [
  {
    image: userone,
    userName: "Jessica Koel",
    chat: "Hi. Can you send your Resume",
    time: "11:45"
  },
  {
    image: usertwo,
    userName: "Sam Nielson",
    chat: "What are you doing?",
    time: "12:55"
  },
  {
    image: userthree,
    userName: "Siva Raj",
    chat: "Have you seen the movie already",
    time: "08:30"
  },
  {
    image: userfour,
    userName: "Tabitha Jim",
    chat: "Call me, when you are free.",
    time: "10:25"
  },
  {
    image: userfive,
    userName: "Ellis Boyd",
    chat: "Kadaiku polaam variya da.",
    time: "11:26"
  },
  {
    image: usersix,
    userName: "Joseph Peter",
    chat: "What are you doing?",
    time: "11:45"
  }
];

root.render(
  <div className='container'>
    <Search />
    <main>
      {
        chatList.map((item) => {
          return <Messenger image={item.image} userName={item.userName} chat={item.chat} time={item.time} />
        })
      }
    </main>
  </div>
);
