import React from 'react';

const AbleDERM = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f7f7f7',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ color: '#333' }}>AbleDERM</h1>
            <p style={{ color: '#666', margin: '10px 0' }}>
                AbleDERM is an inclusive dermatological software solution that caters to the needs of diverse patient populations.
            </p>
            <button style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '16px'
            }} onClick={() => alert('Welcome to AbleDERM!')}>Learn More</button>
        </div>
    );
};

export default AbleDERM;