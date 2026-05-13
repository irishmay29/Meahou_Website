import { useState } from 'react';

const businessTypes = [
  'Retail',
  'Restaurant',
  'Hospitality',
  'Healthcare',
  'Professional Services',
  'Other',
];

const hearAboutUsOptions = [
  'Google Search',
  'Social Media',
  'Friend or Referral',
  'Existing Customer',
  'Trade Show/Event',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    businessType: '',
    heardFrom: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New Contact Request - ${form.companyName || `${form.firstName} ${form.lastName}`.trim()}`
    );

    const bodyLines = [
      `First Name: ${form.firstName}`,
      `Last Name: ${form.lastName}`,
      `Company Name: ${form.companyName}`,
      `Type of Business: ${form.businessType}`,
      `How did you hear about us: ${form.heardFrom}`,
      `Phone Number: ${form.phone}`,
      '',
      'Message:',
      form.message,
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:support@akamaipos.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page-shell container" style={{ flex: 1 }}>
      <div className="page-hero reveal">
        <p className="eyebrow">Contact Us</p>
        <h1>Tell us about your business and we will get back to you.</h1>
        <p className="lead page-lead">
          Fill out the form below and your default mail app will open with all
          details prefilled, ready to send to our team.
        </p>
      </div>

      <div className="contact-info-grid reveal">
        <article className="contact-info-card">
          <h2>Call Us</h2>
          <p>
            <a href="tel:+18088438000">808-843-8000</a>
          </p>
        </article>
      </div>

      <form className="contact-page-form reveal" onSubmit={handleSubmit}>
        <label>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Company Name</span>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Type of Business</span>
          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select one</option>
            {businessTypes.map((type) => (
              <option value={type} key={type}>{type}</option>
            ))}
          </select>
        </label>

        <label>
          <span>How did you hear/know about us?</span>
          <select
            name="heardFrom"
            value={form.heardFrom}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select one</option>
            {hearAboutUsOptions.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label className="message-field">
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us your current POS setup, locations, and what you'd like to improve."
            required
          ></textarea>
        </label>

        <button type="submit" className="button button-primary">Contact Our Team</button>
      </form>
    </section>
  );
}
