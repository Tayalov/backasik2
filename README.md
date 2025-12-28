# Project Report: Weather & Air Quality Health App

Assignment 2 – Backend API Integration & Service Development with additional Health API integration

## 1. Project Overview
This is a full-stack web application that provides real-time weather information and air quality data with a focus on health impact.  
All third-party API calls are performed exclusively on the server side (Node.js + Express) to keep the API key secure and deliver clean JSON to the client.

**Key Features:**
- Search weather by any city name
- Displays: temperature, feels like, wind speed, rain volume (last 3 hours), description, coordinates, country code
- Additional health feature: Air Quality Index (AQI 1–5), quality level, and simple health recommendation
- Fully responsive design (works perfectly on desktop and mobile devices)
- Clean, modern UI with health-themed icon

**Tested Cities (examples from current date):**  
- London (cloudy, ~6°C)  
- Moscow (overcast, cold)  
- Astana (mostly clear, very cold daytime)

## 2. Project Structure and Clean Code Practices
The project follows industry best practices with clear separation of concerns:


├── public/                 
│   ├── portfolio.html       
│   ├── portfolio.css        
│   └── portfolio.js        
├── routes/                  
│   └── weatherRoutes.js
├── services/               
│   ├── weatherService.js    
│   └── healthService.js    
├── .env                     
├── package.json
├── README.md
└── server.js                

- Clean, commented code
- Error handling on both backend and frontend
- Secure: API key never exposed to client
- Responsive layout using CSS media queries

## 3. API Integration
- **OpenWeatherMap Current Weather API** – provides core weather data
- **OpenWeatherMap Air Pollution API** – provides Air Quality Index and health-related insights  
Both APIs use the same free-tier key.

All requests are made server-side → processed → clean JSON returned to frontend.

## 4. Testing
- **Postman**: Successfully tested GET `/api/weather?city=[City]` for multiple cities (Moscow, Astana, London, Paris, Tokyo, etc.)
- **Browser**: Application runs at `http://localhost:3000`, supports search for any city
- Error cases handled (city not found, connection issues)

## 5. Design Decisions
- Server-side fetching only – security and simplicity
- Default city fallback (London) when no input provided
- Health-focused extra API (Air Quality) – directly relates to user well-being
- Minimal dependencies – only Express, Axios, dotenv
- Responsive design – mobile-first approach with media queries
- Added health icon for visual appeal (resized for better layout)

## 6. Setup Instructions (from README.md)
1. Get free API key from https://openweathermap.org/api
2. Create `.env` file with `OPENWEATHER_API_KEY=your_key`

## 7. Conclusion
The application fully meets all core and additional requirements:
- Server-side API integration
- Clean processed JSON response
- Responsive and user-friendly interface
- Valuable health-related enhancement (Air Quality Index with tips)

