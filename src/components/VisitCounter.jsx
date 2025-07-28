// import { useEffect, useState } from 'react';

// const VisitorCounter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const visits = localStorage.getItem('polysite-visits');
//     const newCount = visits ? parseInt(visits) + 1 : 1;
//     localStorage.setItem('polysite-visits', newCount);
//     setCount(newCount);
//   }, []);

//   return (
//     <div style={counterStyle}>
//       👁️ Visitors: {count}
//     </div>
//   );
// };

// const counterStyle = {
//   position: 'fixed',
//   top:100,
//   right: 20,
//   fontSize: '0.9rem',
//   backgroundColor: '#1E90FF',
//   color: 'white',
//   padding: '5px 10px',
//   borderRadius: '8px',
//   zIndex: 1000,
// };

// export default VisitorCounter;
import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem('visit-counted')) {
      const visits = localStorage.getItem('polysite-visits');
      const newCount = visits ? parseInt(visits) + 1 : 1;
      localStorage.setItem('polysite-visits', newCount);
      sessionStorage.setItem('visit-counted', 'true'); // ✅ Mark as counted
      setCount(newCount);
    } else {
      const current = localStorage.getItem('polysite-visits');
      setCount(parseInt(current));
    }
  }, []);

  return (
    <div style={counterStyle}>
      👁️ Visitors: {count}
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
};

export default VisitorCounter;
