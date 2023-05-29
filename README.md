# 🌌 NASA APOD Photo of the Day App

The **NASA Astronomy Picture of the Day (APOD) App** is a React (SPA) App that allows you to select a date from a calendar and fetch the corresponding APOD photo and information from the NASA APOD API.

![Demo](demo.gif)
// TODO: Add Demo gif //


## Features

- Select a specific date from the calendar
- Fetches the APOD photo and information for the selected date
- Displays the APOD photo, title, and explanation

### Prerequisites

- Node.js and npm installed on your machine
- NASA API key (obtainable from the [NASA API website](https://api.nasa.gov/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/apod-component.git
   ```

Navigate to the project directory:
cd apod-photo
Install the dependencies:
npm install
Replace 'YOUR_API_KEY' with your actual NASA API key in the APODComponent.js file.

### Usage

To use the APOD Component in your React application:

Import the APODComponent into your desired App:
javascript

import APODComponent from './APODComponent';
Add the APODComponent to your JSX:
jsx

<APODComponent />

#### Run your React application:
npm start
Open your application in a web browser and start selecting dates from the calendar to view the corresponding APOD photos.
Configuration

In the APODComponent.js file, you can modify the following variables:

apiKey: Replace 'YOUR_API_KEY' with your actual NASA API key obtained from the NASA API website.
Dependencies

React: A JavaScript library for building user interfaces.
React Datepicker: A flexible and customizable date picker component for React.
Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug fixes, please submit a pull request.

### License

This project is licensed under the MIT License.