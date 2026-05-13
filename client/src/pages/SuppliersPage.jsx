import { Link } from 'react-router-dom';
import { supplierLogos } from '../data/supplierLogos';

export default function SuppliersPage() {
  return (
    <section className="page-shell container suppliers-page">
      <div className="page-hero reveal">
        <p className="eyebrow">Suppliers</p>
        <h1>Just a few companies we have worked with.</h1>
        <p className="lead page-lead">
          AkamaiPOS partners with trusted global hardware and software brands to build
          reliable point-of-sale ecosystems for growing businesses.
        </p>
      </div>

      <div className="suppliers-grid reveal" aria-label="Supplier brands">
        {supplierLogos.map((brand) => (
          <article className="supplier-logo-card" key={brand.name}>
            <img src={brand.image} alt={`${brand.name} logo`} loading="lazy" />
          </article>
        ))}
      </div>

      <article className="suppliers-coverage reveal">
        <h2>Akamai POS Hawaii | <a href="tel:+18088438000">(808) 843-8000</a></h2>
        <p>OAHU | MAUI | KAUAI | BIG ISLAND | MOLOKAI | LANAI | GUAM | BEYOND</p>
        <Link to="/contact" className="button button-primary">Become a Partner</Link>
      </article>
    </section>
  );
}
