import React, { useState, useEffect } from 'react'; // Import useEffect
import { useParams } from 'react-router-dom';
import ImageSlider from './gallery.jsx';
//import MapComponent from './mapcomponent.jsx';

import './App.css';

const RentalDetails = () => {
  const { hotelSlug } = useParams(); // Extract hotelSlug from URL parameters
  const [hotelData, setHotelData] = useState(
    { 
        name: '', 
        address: '', 
        guest_count: '', 
        room_count: '', 
        amenities: [],
        images: [],
        description: '',
        host_description: '',
        latitude: '',
        longitude: '',
        host_name: ''
    });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [showMoreHostInfo, setShowMoreHostInfo] = useState(false);
  const [showMoreHouseRules, setShowMoreHouseRules] = useState(false);
  const [showMoreSafety, setShowMoreSafety] = useState(false);
  
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(prev => !prev);

  useEffect(() => {
    const fetchHotelData = async () => {
      if (!hotelSlug) {
        console.warn('No hotel slug provided.');
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3002/hotel/${hotelSlug}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to fetch hotel data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setHotelData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchHotelData();
  }, [hotelSlug]);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!hotelData) return <div>No hotel data available</div>;

  return (
    <div className="container">
        <ImageSlider images={hotelData.images} />
        <div className="cont">
            <div className="details">
                <div className="left">
                    <h2>Entire rental unit in {hotelData.address}</h2>
                    <p>{hotelData.guest_count} guests · {hotelData.room_count} bedrooms · 1 bed · 1 bath</p>
                    <p>
                        <img src="/images/star.png" alt="Star Icon" />
                        <strong> New</strong>
                    </p>
                </div>

                <hr />

                <div className="host-info">
                    <img src="/images/man.png" alt="Host" className="large-img" />
                    <div>
                        <span><strong>Hosted by {hotelData.host_name}</strong></span>
                        <span className="spantext">Superhost · 7 years hosting</span>
                    </div>
                </div>

                <hr />

                <div className="host-info">
                    <img src="/images/self.png" alt="Self Check-in" />
                    <div>
                        <span><strong>Self Check-in</strong></span>
                        <span className="spantext">Check yourself in with the smartlock</span>
                    </div>
                </div>

                <div className="host-info">
                    <img src="/images/superhost.png" alt="Superhost" />
                    <div>
                        <span><strong>{hotelData.host_name} is a Superhost</strong></span>
                        <span className="spantext">Superhosts are experienced, highly rated hosts</span>
                    </div>
                </div>

                <hr />

                <div className="translation">
                    Some info has been automatically translated. <a href="#"><strong>Show original</strong></a>
                </div>

                <div className="description">
                    <p>
                        Welcome to our brand-new hotel, {hotelData.name}, in a quiet and central location next to a private beach!
                    </p>
                    <br />
                    <p>
                        It's conveniently located in {hotelData.address}, just 25min. away from the airport. {hotelData.description} ...{' '}
                        <span className="toggle" onClick={toggleShowMore}>{showMore ? 'Show less' : 'Show more'}</span>
                    </p>
                </div>

                <hr />

                <div className="slee">
                    <h2>Where you'll sleep</h2>
                    <div className="gallery">
                        <img src="/images/room2.jpg" alt="Bedroom" className="side-photo" />
                    </div>
                    <p><strong>Bedroom</strong></p>
                    <p>1 double bed</p>
                </div>

                <hr />

                <div className="amenities-cont">
                    <h2>What this place offers</h2>
                    <div className="amenities">
                        {hotelData.amenities.length > 0 ? hotelData.amenities.map((amenity, index) => (
                            <div key={index}>
                                <img src={`/images/${amenity.toLowerCase()}.png`} alt={amenity} className="amenities-img" /> {amenity}
                            </div>
                        )) : <p>No amenities available</p>}
                    </div>
                    <button className="amenities-show-all">Show all 32 amenities</button>
                </div>

                <hr />

                <div className="calendar-container">
                    <h2>Select check-in date</h2>
                    <p>Add your travel dates for exact pricing</p>
                    <div className="calendars">
                        <div className="month">
                            <div className="month-header">
                                <span className="month-name">July 2024</span>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Su</th>
                                    <th>Mo</th>
                                    <th>Tu</th>
                                    <th>We</th>
                                    <th>Th</th>
                                    <th>Fr</th>
                                    <th>Sa</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="faded">30</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td className="faded">1</td>
                                    <td className="faded">2</td>
                                    <td className="faded">3</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="month">
                            <div className="month-header">
                                <span className="month-name">August 2024</span>
                                <button className="next-month">›</button>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Su</th>
                                    <th>Mo</th>
                                    <th>Tu</th>
                                    <th>We</th>
                                    <th>Th</th>
                                    <th>Fr</th>
                                    <th>Sa</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="faded">28</td>
                                    <td className="faded">29</td>
                                    <td className="faded">30</td>
                                    <td className="faded">31</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cal-footer">
                        <button className="keyboard-icon">⌨</button>
                        <button className="clear-dates">Clear dates</button>
                    </div>
                </div>
            </div>

            <div className="sidebar">
                <h3>Add dates for prices</h3>
                <div className="form-group">
                    <label htmlFor="checkin">Check-in</label>
                    <input type="date" id="checkin" />
                </div>
                <div className="form-group">
                    <label htmlFor="checkout">Checkout</label>
                    <input type="date" id="checkout" />
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <select id="guests">
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>4 guests</option>
                    </select>
                </div>
                <button>Check availability</button>
            </div>
        </div>
        <hr />
        <div>
            <h2>No Reviews (Yet)</h2>
            <div className="review">
                <img src="/images/star.png" alt="reviews" />
                <div>
                    <span>This host has 310 reviews for other places to stay.</span>
                    <span 
                    className="toggle" 
                    onClick={() => setShowMoreReviews(prev => !prev)}
                    >
                    {showMoreReviews ? 'Hide other reviews' : 'Show other reviews'}
                    </span>
                </div>
            </div>
        </div>

        <hr />

        <div>
            <h2>Where you'll be</h2>
            <p>Lima, Provincia de Lima, Peru</p>
            <div className="img-flex">
                <img src="/images/googlemap.png" alt="Map" />
            </div>
            <br />
            <span 
                className="toggle" 
                onClick={() => setShowMoreReviews(prev => !prev)}
            >
                {showMoreReviews ? 'Hide other reviews' : 'Show other reviews'}
            </span>
        </div>

        <hr />

        <div>
            <h2>Meet your Host</h2>
            <div className="host-wrapper">
                <div className="left-column">
                    <div className="host-info-box">
                        <div className="host-profile">
                            <img src="/images/man.png" alt="host image" className="host-image" />
                            <h2 className="host-name">{hotelData.host_name} </h2>
                            <p className="superhost">Superhost</p>
                        </div>
                        <div className="stats">
                            <div className="stat">
                            <div className="stat-value">310</div>
                            <div>Reviews</div>
                            </div>
                            <div className="stat">
                            <div className="stat-value">4.92 ★</div>
                            <div>Rating</div>
                            </div>
                            <div className="stat">
                            <div className="stat-value">7</div>
                            <div>Years hosting</div>
                            </div>
                        </div>
                    </div>
                    <p><span className="icon">🏠</span>Born in the 80s</p>
                    <p><span className="icon">💼</span>My work: Hospitality</p>
                    <p>{hotelData.host_description}...</p>
                    <div 
                        className="show-more" 
                        onClick={() => setShowMoreHostInfo(prev => !prev)}
                        >
                        {showMoreHostInfo ? 'Show less' : 'Show more ›'}
                    </div>
                </div>
                <div className="host-details">
                    <h3>{hotelData.host_name} is a Superhost</h3>
                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                    <br />
                    <h3>Co-hosts</h3>
                    <div className="co-hosts">
                        <img src="/images/man.png" alt="Percy" className="co-host" />
                        <img src="/images/man.png" alt="Raul" className="co-host" />
                    </div>
                    <br />
                    <h3>Host details</h3>
                    <p>Response rate: 100%<br /><br />Responds within an hour</p>
                    <button className="button">Message Host</button>
                </div>
            </div>
        </div>

        <hr />

        <div>
            <h2>Things to know</h2>
            <div className="info">
                <div className="info-option">
                    <div><strong>House Rules</strong></div>
                    <div>Check-in after 4:00 PM</div>
                    <div>Checkout Before 11:00 AM</div>
                    <div>2 guests maximum</div>
                    <div 
                    className="show-more" 
                    onClick={() => setShowMoreHouseRules(prev => !prev)}
                    >
                    {showMoreHouseRules ? 'Show less' : 'Show more ›'}
                    </div>
                </div>
                <div className="info-option">
                    <div><strong>Safety and property</strong></div>
                    <div>Carbon monoxide alarm not reported</div>
                    <div>Smoke alarm not reported</div>
                    <div>Not suitable for children and infants</div>
                    <div 
                    className="show-more" 
                    onClick={() => setShowMoreSafety(prev => !prev)}
                    >
                    {showMoreSafety ? 'Show less' : 'Show more ›'}
                    </div>
                </div>
                <div className="info-option">
                    <div><strong>Cancellation Policy</strong></div>
                    <div>Add your trip dates to get the cancellation details for this stay.</div>
                    <div className="show-more">Add dates ›</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RentalDetails;
