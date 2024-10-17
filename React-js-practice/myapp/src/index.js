import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import myname from './data';
import { num } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));

let mystyle = {
  color: "red", backgroundColor: "blue"
};

//Navbar Component
function Navbar() {
  return (
    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>)
}

// About Component
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio, vero exercitationem, provident officiis ea ipsum asperiores excepturi inventore tenetur dolor sequi voluptatem nisi labore iusto officia aspernatur. Itaque, pariatur?</p>
    </div>)
}

root.render(
  <>
    <h1 style={mystyle}>Hello World</h1>
    <h1 style={{ color: "yellow", backgroundColor: "green" }}>Hello World</h1>
    <h1 class="clr">Hello World</h1>
    <Navbar></Navbar>
    <About></About>
    <h1>{myname} {num}</h1>
  </>
);