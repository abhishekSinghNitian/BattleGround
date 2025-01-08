# BattleGround 4

BattleGround 4 is a web application that provides server settings and information for multiplayer games. The application consists of a backend built with Node.js, Express, and MongoDB, and a frontend built with React and Vite.

## Features

- View server settings and information
- Fetch server settings from a backend API
- Responsive design using Tailwind CSS

## Prerequisites

- Node.js
- MongoDB

## Installation

### Backend

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd backend

2. Install the dependencies:
     npm install

3. Create a .env file in the root directory and add your MongoDB URI:
     MONGODB_URI=<your-mongodb-uri>
     PORT = <your localhost port>

## Frontend
  1. Navigate to the frontend directory:
       cd ../frontend

  2. Install the dependencies:
       npm install

  3. Create a .env file in the root directory and add your API URL:
       VITE_API_URL=http://localhost:3001

## Running the Application
## Backend
To start the backend server, run:
  npm start
To start the backend server in development mode with nodemon, run:
  npm run dev

The backend server will be running on http://localhost:3001.

## Frontend
To start the frontend development server, run:
  npm run dev
The frontend application will be running on http://localhost:3000.

## API Endpoints
  # Server Settings
    POST /api/settings/server-settings: Create new server settings.
    GET /api/settings/server-settings: Get the server settings.
    GET /api/settings/server-settings/:id: Get the server settings by ID.
    
## Project Structure
  ## Backend
    app.js: Entry point of the application.
    dbConnect.js: Database connection configuration.
    server.models.js: Mongoose model for server information.
    serverSettings.models.js: Mongoose model for server settings.
    serverSettings.routes.js: Routes for server settings.
## Frontend
  main.jsx: Entry point of the application.
  App.jsx: Main component of the application.
  ServerSettings.jsx: Component for displaying server settings.
  index.css: Global CSS file.
  tailwind.config.js: Tailwind CSS configuration.
  vite.config.js: Vite configuration.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

