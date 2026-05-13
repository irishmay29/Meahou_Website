import { Link } from 'react-router-dom';
import { hardwareSamples } from '../data/hardwareSamples';

export default function HardwarePage() {
  return (
    <section className="page-shell container">
      <div className="page-hero reveal">
        <p className="eyebrow">POS Hardware Catalog</p>
        <h1>POS hardware samples you can edit anytime.</h1>
        <p className="lead page-lead">
          This page uses sample data so you can quickly swap model names, specs,
          and descriptions whenever your inventory changes.
        </p>
        <p className="edit-note">
          To update samples, edit: <strong>client/src/data/hardwareSamples.js</strong>
        </p>
      </div>

      <div className="hardware-page-items">
        {hardwareSamples.map((item, index) => (
          <section key={item.id} className={`hp-split ${index % 2 === 1 ? 'hp-split--flip' : ''} container`}>
            {/* Picture Side */}
            <div className="hardware-visual">
              <img
                className="hardware-photo"
                src={`https://placehold.co/720x420/e8f5f4/00334d?text=${encodeURIComponent(`${item.name} Photo`)}`}
                alt={`${item.name} placeholder preview`}
                loading="lazy"
              />
            </div>

            {/* Text Side */}
            <div className="hp-split__text">
              <p className="sample-category">{item.category}</p>
              <h2>{item.name}</h2>
              <p className="sample-sku">SKU: {item.sku}</p>
              <p>{item.description}</p>
              <h3>Sample Includes</h3>
              <ul>
                {item.includes.map((part) => (
                  <li key={part}>{part}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="page-actions reveal">
        <Link to="/contact" className="button button-primary">Ask About Hardware Pricing</Link>
      </div>
    </section>
  );
}
