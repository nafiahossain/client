import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <hr />
        <div className="breadcrumb">
          <a href="#peru">Peru</a> ›
          <a href="#LimaProvince">Lima Province</a> ›
          <a href="#JesúsMaría">Jesús María</a>
        </div>
        <hr />
        <h1>Explore other options in and around Lima</h1>
        <div className="options-flex">
          <div className="option">
            <h3>Chorrillos</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>Punta Hermosa</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>Asia</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>Chaclacayo</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>Barranco</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>Santiago de Surco</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>San Isidro</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>San Miguel</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option">
            <h3>Lunahuaná</h3>
            <p>Vacation rentals</p>
          </div>
        </div>
        <h2>Other types of stays on Airbnb</h2>
        <div className="other-stays">
          <div className="other-stays-option">
            <p>Jesús María vacation rentals</p>
          </div>
          <div className="other-stays-option">
            <p>Jesús María monthly stays</p>
          </div>
          <div className="other-stays-option">
            <p>Apartment vacation rentals in Jesús María</p>
          </div>
          <div className="other-stays-option">
            <p>Apartment vacation rentals in Lima Province</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
