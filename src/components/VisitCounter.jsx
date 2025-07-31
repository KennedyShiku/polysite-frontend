import { useEffect, useState } from 'react';
import logo from '../assets/images/polysitepartialbackground.png'; 

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem('visit-counted')) {
      const visits = localStorage.getItem('polysite-visits');
      const newCount = visits ? parseInt(visits) + 1 : 1;
      localStorage.setItem('polysite-visits', newCount);
      sessionStorage.setItem('visit-counted', 'true');
      setCount(newCount);
    } else {
      const current = localStorage.getItem('polysite-visits');
      setCount(parseInt(current));
    }
  }, []);

  return (
    <div style={counterStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      Visitors: {count}
    </div>
  );
};

const counterStyle = {
  position: 'fixed',
  top: 100,
  right: 20,
  fontSize: '0.9rem',
  backgroundColor: '#1E90FF',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '8px',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const logoStyle = {
  height: '20px',
  width: '20px',
  objectFit: 'contain'
};

export default VisitorCounter;
