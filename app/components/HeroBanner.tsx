// app/components/HeroBanner.tsx
export default function HeroBanner() {
    return (
      <section style={{
        backgroundImage: 'url("/school-banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: '#fff',
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          borderRadius: '10px',
          display: 'inline-block',
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Get School-Ready the Easy Way!
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            Order textbooks, stationery, and supplies online — delivered across Trinidad & Tobago.
          </p>
          <button style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#ffcc00',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
            Shop Now
          </button>
        </div>
      </section>
    );
  }
  