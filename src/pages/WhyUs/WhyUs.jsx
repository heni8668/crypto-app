import React, { useState } from "react";
import BitHand from "../../images/chooseus/choose-main.png";
import TrustWalletQRCode from "../../images/trust-wallet-qr.jpg"; // path to your Trust Wallet QR code image
import BinanceQRCode from "../../images/binance-qr.jpg"; // path to your Binance QR code image

function WhyUs() {
  const [copied, setCopied] = useState(null); // To track which address is copied

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(address); // Update state when address is copied
      setTimeout(() => setCopied(null), 2000); // Clear after 2 seconds
    });
  };

  return (
    <>
      <section id="choose-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <h2>
              <span>Select your Address</span>
            </h2>
            <div className="choose-container__content" style={styles.content}>
              {/* Left section for Binance QR code */}
              <div className="choose-container__content__1" style={styles.column}>
                <div className="wallet-item" style={styles.walletItem}>
                  <h4 style={styles.walletTitle}>Binance Address</h4>
                  <p
                    style={styles.walletText}
                    onClick={() => copyToClipboard("TFLd8k7rE8aJMbgSQnKrHYxXjf7cV3cEce")}
                  >
                    {copied === "TFLd8k7rE8aJMbgSQnKrHYxXjf7cV3cEce"
                      ? "Copied!"
                      : "TFLd8k7rE8aJMbgSQnKrHYxXjf7cV3cEce"}
                  </p>
                  <img
                    src={BinanceQRCode}
                    alt="Binance QR"
                    className="qr-code"
                    style={styles.qrCode}
                  />
                </div>
              </div>

              {/* Center section for hand image */}
              <div className="choose-container__content__2" style={styles.centerColumn}>
                <img
                  src={BitHand}
                  alt="hand_img"
                  style={styles.handImage}
                />
              </div>

              {/* Right section for Trust Wallet QR code */}
              <div className="choose-container__content__3" style={styles.column}>
                <div className="wallet-item" style={styles.walletItem}>
                  <h4 style={styles.walletTitle}>Trust Wallet Address</h4>
                  <p
                    style={styles.walletText}
                    onClick={() => copyToClipboard("TEQ7ss5xnn24PwXWRppw28fR4HgKFcfbZM")}
                  >
                    {copied === "TEQ7ss5xnn24PwXWRppw28fR4HgKFcfbZM"
                      ? "Copied!"
                      : "TEQ7ss5xnn24PwXWRppw28fR4HgKFcfbZM"}
                  </p>
                  <img
                    src={TrustWalletQRCode}
                    alt="Trust Wallet QR"
                    className="qr-code"
                    style={styles.qrCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  content: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "20px",
  },
  column: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // White background for each wallet section
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  centerColumn: {
    flex: "2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  walletItem: {
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  },
  walletTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  walletText: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "15px",
    cursor: "pointer", // Make the text look clickable
  },
  qrCode: {
    width: "150px",
    height: "150px",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  handImage: {
    maxWidth: "80%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};

export default WhyUs;
