# My Country App

A web application built using **NestJS** on the backend and **Next.js** on the frontend, allowing users to explore country information, including borders, flags, and population data.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [API Integration Issues](#api-integration-issues)
- [Frontend Implementation](#frontend-implementation)
- [Backend Implementation](#backend-implementation)
- [Known Issues](#known-issues)

---

## Technologies Used

- **Frontend**: 
  - **Next.js**: React framework for building the user interface.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **Recharts**: Charting library for displaying population data over time.
  - **TypeScript**: Typed superset of JavaScript for better development experience and type safety.
  
- **Backend**: 
  - **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
  - **Axios**: Promise-based HTTP client for making requests to external APIs.

---

## Features

- Display **country information** such as name, flag, population data, and borders.
- View **historical population data** over time using interactive line charts.
- **Explore countries** that border the selected country.
- **Responsive design** that adjusts layout based on screen size.

---

## Installation

### Backend (NestJS)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-country-app.git
   cd my-country-app
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   Start the backend server:
   npm run start
   ```

The backend will be available at `http://localhost:3000`.

### Frontend (Next.js)

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   
   ```
The frontend will be available at `http://localhost:3001`.

## API Integration Issues

The application integrates two external APIs for country data:

- **Nager.Date API**: Provides country names and some related data.
- **Countries & Cities API**: Provides more detailed country information, including population data and flags.

However, there are some discrepancies in country codes between the two APIs. For example:

- **Venezuela** is listed as "VE" in the Nager.Date API, but "VEN" in the Countries & Cities API. This can cause some countries to be unavailable or display incorrect data in certain cases.


### Solution

You can try to manually map the country codes or ensure that your environment variables are properly configured to handle these discrepancies.

---

## Frontend Implementation

The frontend allows users to:

### Home Page:

- Display an introduction to the app.
- A "Get Started" button takes the user to the countries list.

### Countries Page:
- Fetch and display all listed countries, including:
  - Country Code.
  - Country Name.

### Specific Country Page:

- Fetch and display details for a selected country, including:
  - Name and flag.
  - Historical population data in a line chart.
  - List of bordering countries.

The **Recharts** library is used to render the population data over time as a line chart, and **Tailwind CSS** is used for styling.

---

## Backend Implementation

The backend serves two main routes:

- **GET /countries**: Fetches a list of all available countries from the Nager.Date API.
- **GET /countries/:countryCode**: Fetches detailed information for a specific country by country code from the Countries & Cities API. This includes:
  - Flag URL
  - Borders
  - Historical population data

The backend uses **Axios** for making HTTP requests to the external APIs.

---

## Known Issues

- I tried but the **environment variables** weren't functioning correctly, so it wasn not possible to configure the *backend* and *frontend* PORTs correctly. This needs to be fixed for a more robust experience.
