# Accommodation Booking App

## Overview
The Accommodation Booking App is a web application that allows users to manage accommodations and reservations. Users can log in, view a list of accommodations, create new accommodations, edit existing ones, and manage their reservations.

## Features
- User authentication and login
- Accommodation management:
  - View list of accommodations
  - Create new accommodation
  - Edit existing accommodation
- Reservation management:
  - View list of reservations
  - Create new reservation
  - Cancel reservation

## Project Structure
```
accommodation-booking-app
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── index.js
│   ├── components
│   │   ├── AccommodationForm.jsx
│   │   ├── AccommodationList.jsx
│   │   ├── EditAccommodation.jsx
│   │   ├── LoginForm.jsx
│   │   ├── ReservationForm.jsx
│   │   ├── ReservationList.jsx
│   │   └── Welcome.jsx
│   ├── pages
│   │   ├── Accommodations.jsx
│   │   ├── EditAccommodationPage.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Reservations.jsx
│   │   └── NewReservation.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── globalStyles.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd accommodation-booking-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## API Documentation
For details on the API endpoints used in this application, please refer to the [API Documentation](https://apibookingsaccomodations-production.up.railway.app/api/documentation).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.