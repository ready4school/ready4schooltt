// app/components/Header.tsx
export default function Header() {
    return (
      <header style={{
        backgroundColor: '#005b96',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Ready4SchoolTT</h1>
        <nav>
          <a href="#home" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
          <a href="#about" style={{ color: 'white', marginRight: '1rem' }}>About</a>
          <a href="#shop" style={{ color: 'white' }}>Shop</a>
        </nav>
      </header>
    );
  }
  