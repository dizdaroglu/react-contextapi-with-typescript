import React from 'react';
import { Store } from './Store/Store';
import { Link } from '@reach/router';

const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Mr. Robot</h1>
          <p>Pick your favourite episode!!</p>
        </div>
        <div className="linkContent">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/faves" className="link">
            Favourite(s): {state.favourites.length}
          </Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
