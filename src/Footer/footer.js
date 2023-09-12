import React from 'react';
import './footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>ONLINE SHOPPING</h3>
        <ul>
          <li>Dogs</li>
          <li>Cats</li>
          <li>Small Animals</li>
          <li>Personalised Items</li>
          <li>HUFT Blog</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>QUICK LINKS</h3>
        <ul>
          <li>Contact Us</li>
          <li>Track Your Order🚚</li>
          <li>FAQs & Exchange Policy</li>
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>Returns & Exchange</li>
          <li>HUFT Rewards</li>
        </ul>
      </div>


      <div className="footer-section">
        <h3>Download HUFT APP</h3>
        <p>LEAVE YOUR EMAIL AND GET OFFERS</p>
        
      </div>
    </footer>
  );
}

export default Footer;
