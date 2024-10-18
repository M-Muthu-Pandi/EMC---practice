import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import FormComp from './components/FormComp';
import FormCompone from './components/Namecomp';
import FormComptwo from './components/Numbercomp';
import ShoppingList from './components/ShoppingList';
import ColorChange from './components/Colorchange';
import CheckUncheck from './components/Checkuncheck';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ChangeContent = () => {
  let [content, setmycontent] = useState("Hello World");

  const change = () => {
    setmycontent("Bye World");
  }

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

root.render(
  <>
    <ChangeContent />
    <hr />
    <FormComp />
    <hr />
    <FormCompone />
    <hr />
    <FormComptwo />
    <hr />
    <ShoppingList />
    <hr />
    <ColorChange />
    <hr />
    <CheckUncheck />
  </>
);