import React from 'react';

const TestApp = () => {
  console.log('🔧 TestApp component is rendering!');
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f9ff', 
      border: '2px solid #0ea5e9',
      borderRadius: '8px',
      margin: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#0ea5e9', margin: '0 0 10px 0' }}>
        🎉 React is Working!
      </h1>
      <p style={{ margin: '0 0 10px 0' }}>
        If you see this, React components are loading successfully.
      </p>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
        Time: {new Date().toLocaleTimeString()}
      </p>
      <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
        Port: 3004
      </p>
    </div>
  );
};

export default TestApp;
