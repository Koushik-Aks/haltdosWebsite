// components/SecurityBanner.js
export default function SecurityBanner() {
    return (
      <div style={bannerStyles}>
        <h2 style={subtitleStyles}>Applications are the #1 Source of Security Breaches</h2>
        <h1 style={titleStyles}>Secure Your Production Environment</h1>
        <p style={paragraphStyles}>
          Comprehensive, end-to-end protection against cyberattacks targeting critical business operations.
        </p>
        <p style={paragraphStyles}><strong>Protecting Thousands of Applications Worldwide!</strong></p>
      </div>
    );
  }
  
  const bannerStyles = {
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };
  
  const titleStyles = {
    fontSize: '2rem',
    margin: '10px 0',
  };
  
  const subtitleStyles = {
    fontSize: '1.5rem',
    margin: '5px 0',
    fontWeight: 400,
  };
  
  const paragraphStyles = {
    margin: '5px 0',
  };
  