import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <div style={styles.section}>
        <div style={styles.textRight}>
          <p style={styles.description}>
            Welcome to KrushiMitra, where we revolutionize the way farmers and buyers interact through innovative technology and smart contracts.
          </p>
        </div>
      </div>

      <h2 style={styles.subheader}>Our Mission</h2>
      <div style={styles.section}>
        <div style={styles.textLeft}>
          <p style={styles.description}>
            Our mission is to bridge the gap between farmers and buyers by providing a comprehensive platform that facilitates easy contract creation, secure transactions, and transparent communication. We aim to empower farmers and buyers by integrating cutting-edge technology to streamline the agricultural supply chain.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src="https://www.bluechipsolutions.in/wp-content/uploads/2019/06/cf.jpg" alt="Empowering Farmers and Buyers" style={styles.image} />
        </div>
      </div>

      <h2 style={styles.subheader}>Empowering Farmers and Buyers</h2>
      <div style={styles.section}>
        <div style={styles.imageContainer}>
          <img src="https://tracextech.com/wp-content/uploads/2023/05/farm-management-solutions-for-contract-farmers-scaled.jpg" alt="Transparency and Trust" style={styles.image} />
        </div>
        <div style={styles.textRight}>
          <p style={styles.description}>
            Our platform is dedicated to transforming the agricultural landscape by bridging the gap between farmers and buyers. We provide a secure and transparent environment for assured contract farming, ensuring that both parties can engage in mutually beneficial agreements with confidence. By leveraging cutting-edge technology, we aim to empower farmers to get fair prices and buyers to secure quality produce.
          </p>
        </div>
      </div>

      <h2 style={styles.subheader}>Our Commitment to Transparency and Trust</h2>
      <div style={styles.section}>
        <div style={styles.textLeft}>
          <p style={styles.description}>
            At the heart of our mission is a commitment to transparency and trust. We understand the challenges faced by farmers in securing reliable buyers and the difficulties buyers face in finding trustworthy suppliers. Our platform simplifies the process by offering smart contracts, escrow payments, and real-time market data, ensuring that every transaction is clear, fair, and secure.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTma9OgkpOcM_rssWrUZOVJORDuTDGNj0oA&s" alt="Innovation in Agriculture" style={styles.image} />
        </div>
      </div>

      <h2 style={styles.subheader}>Driving Innovation in Agriculture</h2>
      <div style={styles.section}>
        <div style={styles.imageContainer}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTma9OgkpOcM_rssWrUZOVJORDuTDGNj0oA&s" alt="Innovation in Agriculture" style={styles.image} />
        </div>
        <div style={styles.textRight}>
          <p style={styles.description}>
            We believe in the power of innovation to drive growth in the agricultural sector. Our platform integrates advanced features such as AI-powered crop recommendations, contract variety selection, and government scheme integration to help farmers and buyers make informed decisions. We're not just a platform; we're a partner in fostering sustainable and profitable farming practices.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#006400', // Dark green color
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheader: {
    color: '#228B22', // Forest green color
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description: {
    marginBottom: '15px',
    lineHeight: '1.6',
    fontSize: '16px',
    color: '#333',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
  },
  textLeft: {
    flex: 1,
    order: 2,
    padding: '10px',
  },
  textRight: {
    flex: 1,
    order: 1,
    padding: '10px',
  },
  imageContainer: {
    flex: 1,
    order: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default AboutUs;
