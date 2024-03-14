import React from 'react';
import ReactDOM from 'react-dom/client';
//import GridCardFactory from 'GridCardFactory';
import GridCardFactory from './GridCardFactory';
import NavBar from './NavBar';
import HeaderCarousel from './HeaderCarousel';
import Navigation from './Navigation';

function Home(){
return (
  <div>
    <HeaderCarousel />
    <GridCardFactory />
  </div>
)};//<HeaderCarousel /><GridCard />


export default Home;