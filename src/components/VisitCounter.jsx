import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visits = localStorage.getItem('polysite-visits');
    const newCount = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem('polysite-visits', newCount);
    setCount(newCount);
  }, []);

  return (
    <div style={counterStyle}>
      👁️ Visitors: {count}
    </div>
  );
};

const counterStyle = {
  position: 'fixed',
  top: 10,
  right: 20,
  fontSize: '0.9rem',
  backgroundColor: '#1E90FF',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '8px',
  zIndex: 1000,
};

export default VisitorCounter;
