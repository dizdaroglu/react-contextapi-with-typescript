import React from 'react';
import HomePage from './Page/HomePage';

const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Mr. Robot</h1>
          <p>Pick your favourite episode!!</p>
        </div>
        <div>
          <li>Home</li>
          <li>Fav</li>
        </div>
      </header>
      <HomePage />
    </>
  );
};

export default App;
