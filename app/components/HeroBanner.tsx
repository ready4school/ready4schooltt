import React from 'react';

const HeroBanner = () => {
  return (
    <section style={{
      padding: '3rem 1rem',
      textAlign: 'center',
      backgroundColor: '#f0f8ff',
      borderBottom: '2px solid #e0e0e0'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Ready4SchoolTT!</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        Get your school books, stationery, and supplies delivered across Trinidad & Tobago — simple, fast, and stress-free.
      </p>
      <button style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#00b894',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Shop Now
      </button>
    </section>
  );
};

export default HeroBanner;
