// app/components/Benefits.tsx
import React from 'react';

const benefits = [
  {
    title: 'Easy Ordering',
    description: 'Order all your child’s school books and stationery online without the hassle.',
    icon: '📦',
  },
  {
    title: 'Nationwide Delivery',
    description: 'We deliver across Trinidad and Tobago — fast, safe, and reliable.',
    icon: '🚚',
  },
  {
    title: 'Trusted Service',
    description: 'We work directly with official school booklists and only source verified material.',
    icon: '✅',
  },
];

export default function Benefits() {
  return (
    <section style={{ padding: '3rem 1rem', background: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
        Why Parents Love Ready4SchoolTT
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {benefits.map((item, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            padding: '2rem',
            width: '300px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem' }}>{item.icon}</div>
            <h3 style={{ marginTop: '1rem' }}>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
