import React from 'react';
import Navbar from './navbar.jsx';
import Header from './header.jsx';
import RentalDetails from './rentaldetails.jsx';
import Footer from './footer.jsx';
import './App.css';

const Parent = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <RentalDetails />
        <Footer />
    </div>
  );
}

export default Parent;