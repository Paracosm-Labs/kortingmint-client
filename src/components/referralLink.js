// components/referralLnk.js
import React, { useState } from 'react';

function ReferralLink() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://kortingmint.com/r=trxpartner123"; // Replace with dynamic link from props or state

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join KortingMint',
          text: 'Check out KortingMint and earn rewards by joining my exclusive club!',
          url: referralLink,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert('Sharing is not supported on this browser. Please copy the link instead.');
    }
  };

  return (
    <div className="referral-link-container mb-3">
      <label htmlFor="referral-link" className="form-label"><b>Your Referral Link:</b></label>
      <div className="input-group">
        <input 
          type="text" 
          id="referral-link" 
          className="form-control" 
          value={referralLink} 
          readOnly 
        />
        <button 
          className="btn btn-outline-secondary" 
          onClick={handleCopy} 
          title="Copy to Clipboard"
        >
          <i className='fa fa-copy'></i>
        </button>
        <button 
          className="btn btn-outline-secondary" 
          onClick={handleShare} 
          title="Share Link"
        >
          <i className='fa fa-share'></i>
        </button>
      </div>
      {copied && <div className="alert alert-success mt-2">Link copied to clipboard!</div>}
    </div>
  );
}

export default ReferralLink;
