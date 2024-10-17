import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const ChangeContent = () => {
  let [content, setmycontent] = useState("Hello World");

  const change = () => {
    setmycontent("Bye World");
  }

  return (
    <>
      <h1>{content}</h1>
      <button onClick={change}>Change</button>
    </>
  )
}

root.render(
  <>
    <ChangeContent />
  </>
);