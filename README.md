# Music Database Web Application

This is a simple web application for searching and retrieving music-related information. It consists of a frontend and a backend component.

## Frontend

### Description

The frontend of this application provides a user interface for searching for artists, songs, or albums. Users can enter a search query, submit the form, and view search results.

### Technologies Used

- HTML
- CSS (styles in `index.css`)
- JavaScript

### Usage

1. Open the `index.html` file in a web browser.
2. Enter a search query (artist, song, or album) in the input field.
3. Click the "Search" button to initiate the search.
4. View the search results in the browser console (for debugging purposes).

## Backend

### Description

The backend of this application handles incoming search requests from the frontend. It connects to a database and retrieves information based on the search query.

### Technologies Used

- Node.js with Express.js
- PostgreSQL 

### Setup

1. Install Node.js (if not already installed).
2. Install the required dependencies by running `npm install` in the backend directory.
3. Set up your PostgreSQL database and configure the connection in the `db-connect.js` file.
4. Run the backend server using `npm start` or `node app.js`. The server should run on port 3000 by default.

### API Endpoint

- `GET /api/artists?q=<searchQuery>`: Fetches artists matching the provided search query.


## Installation and Running

To install and run the app, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `backend` directory and install backend dependencies using `npm install`.
3. Set up and configure your PostgreSQL database as mentioned in `db-connect.js`.
4. Start the backend server with `npm start` or `node app.js`.
5. Open the `index.html` file in a web browser to use the frontend.


