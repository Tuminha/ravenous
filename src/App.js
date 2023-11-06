import React from 'react';
import './App.css';
// Import the Business component that is within src/components/Business.js
import Business from './components/Business/Business.js';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};





class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Business business={business} />
      </div>
    );
  }
}

export default App;

