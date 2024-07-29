## Hotel Booking Frontend

This is the frontend portion of the Hotel Booking application, built using React. The application allows users to view hotel details, including images, descriptions, and locations.

# Components
App.js
- Description: The main entry point of the application, responsible for setting up routing.
- Features:
    - Uses react-router-dom for routing.
    - Defines the main route for hotel details and a catch-all route for 404 pages.

Parent.js
- Description: A container component that fetches hotel data and renders child components.
- Features:
    - Fetches hotel data based on the hotelSlug URL parameter.
    - Manages state for hotel data and error handling.

Header.js
- Description: Displays the name and address of the hotel.
- Features:
    - Fetches and displays hotel information.
    - Integrates with MapComponent to show the hotel's location on a map.
 
ImageSlider.js
- Description: Displays images of the hotel in a slider format.
- Features:
    - Fetches images from the backend.
    - Allows users to navigate through the images.
 
MapComponent.js
- Description: Displays the hotel's location on a map using latitude and longitude coordinates.
- Features:
    - Integrates with map libraries to display interactive maps.
 
# Setting Up the Project
Prerequisites
- Node.js and npm installed.
- A backend API to provide hotel and room data (refer to the backend project setup).

# Installation
1. git clone https://github.com/nafiahossain/client.git
2. cd client
3. npm install
4. npm run dev

The application will run on http://localhost:5473.

# Connecting React to Node.js and PostgreSQL

1. Frontend:
- Uses fetch to make HTTP requests to the backend API.
- Displays the fetched data using various React components.
  
Backend:
- The backend (Node.js + Express) is responsible for handling API requests and interacting with the PostgreSQL database.
- It should provide endpoints like /hotel/:hotelSlug and /hotel/:hotelSlug/:roomSlug to serve hotel and room data.

Database:
- Ensure the PostgreSQL database is set up and accessible by the backend.
- The database should contain tables for storing hotel and room information.


# Running the Application
1. Start the backend server (ensure it's running before the frontend):
- Follow the backend project's README for setup instructions.
  
2. Start the frontend:
- Navigate to the frontend directory.
- Run npm run dev to start the React application.

  
# Troubleshooting
Ensure the backend server is running and reachable from the frontend.
Check the browser console and backend logs for error messages.
Verify database connections and configurations.
