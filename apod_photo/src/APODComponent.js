import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const APODComponent = () => {
  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      const apiKey = 'DEMO_KEY';
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    if (selectedDate) {
      fetchAPOD();
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='main-container'>
      <div>
        <DatePicker className='calendar' selected={selectedDate} onChange={handleDateChange} placeholderText="Select a date" />
      </div>  
      {apodData ? (
      <div className='inner-container'>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} />
          <div className='description'>
            <p>{apodData.explanation}</p>
          </div>
      </div>
      ) : (
        <p>No APOD data available for the selected date.</p>
      )}
    </div>
  );
};

export default APODComponent;

/**
* ! The toISOString() method returns a string in simplified extended ISO format (ISO 8601), 
* ! which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). 
* ! The timezone is always zero UTC offset, as denoted by the suffix Z.
*/

