import React from 'react';
import './styles/HomePage.css';

const Home = () => (
  <div className="homePageContainer">
    <h2 className="welcome">Welcome to our page!</h2>
    <p className="description">
      &quot;Math Magicians&quot; is a web application designed to enhance and test users&apos;
      mathematical skills while providing an interactive and
      engaging experience. With a user-friendly interface,
      it offers various math challenges and exercises,
      helping users practice arithmetic operations
      like addition, subtraction, multiplication, and division.
    </p>
    <p className="description">
      {' '}
      It is a Single Page App (SPA) that allows users to:
    </p>
    <ul className="listContainer">
      <li className="listItem">Make simple calculations</li>
      <li className="listItem">Read a random math-related quote</li>
    </ul>
  </div>
);

export default Home;
