import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="container-fluid">
          <h1>FIND YOUR OPPORTUNITY</h1>
          <p>Hired matches outstanding people with innovative companies</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
