const HowItWorks = () => {
    return (
      <section className="py-12 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-4xl mb-2">📝</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Books</h3>
              <p>Select the school, class, and subjects to view your booklist.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛒</div>
              <h3 className="text-xl font-semibold mb-2">Add to Cart</h3>
              <p>Pick what you need and add it to your shopping cart with ease.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📦</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>We’ll deliver right to your door, anywhere in Trinidad & Tobago.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  