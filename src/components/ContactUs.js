import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate your backend API here to handle form submission
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1>Contact Krushimitra</h1>
      <p style={styles.description}>
        We value your feedback and inquiries. Please fill out the form below, and our team will get back to you promptly.
      </p>
      <div style={styles.contactDetails}>
        <p>Email: <a href="mailto:contact@khrushimitra.com">contact@khrushimitra.com</a></p>
        <p>Helpline: +91-9876543210</p>
        <p>Address: 123 Agriculture Lane, Rural District, Maharashtra, India</p>
      </div>
      {submitted && <p style={styles.successMessage}>Thank you for reaching out to Khrushimitra! We'll be in touch soon.</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '40px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#2e7d32',
  },
  contactDetails: {
    marginBottom: '30px',
    color: '#2e7d32',
    fontSize: '16px',
    textAlign: 'left',
  },
  successMessage: {
    color: '#388e3c',
    marginBottom: '20px',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '15px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #c8e6c9',
    fontSize: '16px',
  },
  textarea: {
    padding: '15px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #c8e6c9',
    fontSize: '16px',
    minHeight: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '15px',
    marginTop: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#43a047',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default ContactUs;