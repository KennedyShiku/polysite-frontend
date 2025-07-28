import { useEffect, useState } from 'react';

const Ticker = () => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('Loading location...');

  useEffect(() => {
    // Time updater
    const updateDateTime = () => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    };

    updateDateTime(); // set immediately
    const interval = setInterval(updateDateTime, 1000);

    // Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          const city = data.address?.city || data.address?.town || '';
          const country = data.address?.country || '';
          setLocation(`${city}, ${country}`);
        } catch (error) {
          setLocation('Location unavailable');
        }
      });
    } else {
      setLocation('Geolocation not supported');
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={tickerStyle}>
      📍 {location} | 🕒 {dateTime}
    </div>
  );
};

const tickerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#1E90FF',
  color: 'white',
  fontSize: '0.9rem',
  textAlign: 'center',
  padding: '10px 0',
  zIndex: 1000,
};

export default Ticker;
