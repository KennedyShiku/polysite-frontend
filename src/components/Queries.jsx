import { useState } from 'react';

const Queries = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You could later connect this to Firebase or an email service
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <section className="queries-section section-content" id="queries">
      <h2 className="section-title" data-aos="fade-up">Customer Queries</h2>
      <p className="text" data-aos="fade-up" data-aos-delay="200">
        Have a question about our products or services? Fill out the form below and we’ll get back to you!
      </p>

      <form className="query-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="question"
          placeholder="Your Question"
          required
          rows={5}
          value={formData.question}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="button">Submit</button>

        {submitted && <p className="text success-message">Thank you! We'll respond to your inquiry soon.</p>}
      </form>
    </section>
  );
};

export default Queries;
