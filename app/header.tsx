'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>📚 Ready4SchoolTT</div>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/shop" style={styles.link}>Shop</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    alignItems: 'center',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  nav: {
    display: 'flex',
    gap: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500
  }
};
