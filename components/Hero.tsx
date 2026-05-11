export function Hero() {
  return (
    <section
      className="hero"
      aria-label="Itele signature collection"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(43, 7, 8, 0.74), rgba(43, 7, 8, 0.12) 48%, rgba(43, 7, 8, 0.58)), url("https://i.pinimg.com/1200x/bb/fc/e6/bbfce63dc4d8bf7d251a4ef9669dae30.jpg")',
      }}
    >
      <div className="hero-copy">
        <p>Heirloom pieces for the art of becoming</p>
        <h1>Radiance, Made Rare</h1>
        <a href="#new-releases" className="button button-light">
          Shop Collection
        </a>
      </div>
    </section>
  );
}