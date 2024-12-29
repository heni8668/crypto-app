import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './wallet.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { LuFolderClock } from "react-icons/lu";
import {
  IconChevronDown,
  IconUpload,
  IconDownload,
  IconWallet,
  IconHome,
  IconHistory,
} from "@tabler/icons-react";
import axios from "axios";
import Btc from "../../images/hero/bitcoin.png";
import Eth from "../../images/hero/ethereum.png";
import Login from "../../components/Login/Login";




function Hero() {
  const [data, setData] = useState([]);
  const [coinsLoad, setCoinsLoad] = useState(true);
  const [totalAmount, setTotalAmount] = useState(null);
  const [userMessage, setUserMessage] = useState("");
  const [isValueVisible, setIsValueVisible] = useState(false);

  const marketUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;
  const apiBaseUrl = "https://crypto-ault.onrender.com/api/auth";

  function numberWithCommas(x) {
    if (x === null || x === undefined) {
      return "0";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(marketUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    const fetchWalletTotal = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setUserMessage(
            "Please sign up or log in to start using your wallet!"
          );
          return;
        }
        const response = await axios.get(`${apiBaseUrl}/${userId}`);
        const userData = response.data;
        setTotalAmount(userData.send || 0.0);
      } catch (error) {
        console.error("Error fetching wallet total:", error);
        setUserMessage(
          "Unable to fetch wallet details. Please try again later."
        );
      }
    };

    fetchMarketData();
    fetchWalletTotal();
  }, [marketUrl, apiBaseUrl]);

  // Toggle the visibility of the price value
  const toggleVisibility = () => {
    setIsValueVisible(!isValueVisible);
  };

  return (
    <>
      {/* First Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text" style={{ marginTop: "100px" }}>
              {/* <img className="btc-float" src={Btc} alt="floating-el" /> */}
              {userMessage ? (
                <h6 className="user-message">{userMessage}</h6>
              ) : (
                // <h6>
                //   <span>Main Wallet Total:</span>
                //   <br />
                //   <span className="wallet-total">
                //     {numberWithCommas(totalAmount)}
                //     <br />$
                //   </span>
                //   <span>Crypto currencies</span>
                // </h6>
                <div>
                  <div className="wallet-container">
                    <div className="inner-wallet">
                      Main Wallet 1
                      <FaAngleDown className="inner" />
                    </div>
                    <div className="price">
                      {isValueVisible ? (
                        <p className="price-value">$ {totalAmount}</p>
                      ) : (
                        <p className="price-value">{"•••••"}</p>
                      )}
                      {/* <p className="price-value">
                        {isValueVisible ? {totalAmount} : "•••••"}
                      </p> */}
                      {/* {isValueVisible ? "$0.00" : "•••••"} */}
                      {/* <FaEye /> */}
                      <button
                        onClick={toggleVisibility}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "0",
                          color: "white",
                        }}
                      >
                        {isValueVisible ? (
                          <FaEyeSlash size={18} />
                        ) : (
                          <FaEye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="actions" style={{ color: "white" }}>
                    <div className="buttons">
                      <FaArrowUp className="icons" size={36} />
                      <p className="text">Send</p>
                    </div>

                    <div className="buttons">
                      <FaArrowDown className="icons" size={36} />
                      <p className="text">Receive</p>
                    </div>
                    <div className="buttons">
                      <FaWallet className="icons" size={36} />
                      <p className="text">Buy</p>
                    </div>
                    <div className="buttons">
                      <RiBankLine className="icons" size={36} />
                      <p className="text">Sell</p>
                    </div>
                    <div className="buttons">
                      <LuFolderClock className="icons" size={36} />
                      <p className="text">History</p>
                    </div>
                  </div>
                </div>
              )}
              {/* <img className="eth-float" src={Eth} alt="floating-el" /> */}
            </div>

            {/* <a className="mobile-btn-hero" href="#market">
              See Prices <IconChevronDown />
            </a> */}

            {/* <div onLoad={() => setCoinsLoad(false)} className="coin-slider">
              {coinsLoad && <span className="loader"></span>}
              {data.map((item) => (
                <Link
                  to={`/coin/${item.id}`}
                  key={item.id}
                  className="slider-coin"
                >
                  <img src={item?.image} alt={item?.name} />
                  <p className="slider-coin__name">
                    {item?.name}{" "}
                    <span
                      className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h <= 0
                          ? "red-text"
                          : "green-text")
                      }
                    >
                      {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                    </span>
                  </p>
                  <p className="slider-coin__price">
                    {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                  </p>
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Second Section */}
      {/* <section id="home" className="hero-section1">
        <div className="container">
          <div className="hero-actions">
            <Link to="/wallet" className="action">
              <IconUpload size={40} />
              <p>Send</p>
            </Link>
            <Link to={''} className="action">
              <IconDownload size={40} />
              <p>Receive</p>
            </Link>
            <Link to={''} className="action">
              <IconWallet size={40} />
              <p>Buy</p>
            </Link>
            <Link to={''} className="action">
              <IconHome size={40} />
              <p>Sell</p>
            </Link>
            <Link to={''} className="action">
              <IconHistory size={40} />
              <p>History</p>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Styling */}
      <style jsx>{`
        .wallet-total {
          font-size: 24px;
          font-weight: bold;
          color: #28a745;
        }
        .user-message {
          font-size: 18px;
          color: #ff5722;
          font-weight: 500;
          text-align: center;
        }
        .hero-content__text h6 {
          font-size: 18px;
          line-height: 1.5;
          color: #555;
          margin-bottom: 20px;
        }
        .second-section {
          margin-top: 50px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          gap: 20px;
          padding: 20px;
          /* background-color: #f8f9fa; */
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .action {
          text-align: center;
          flex: 1 1 calc(20% - 10px);
          min-width: 120px;
          max-width: 180px;
        }
        .action p {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 500;
          color: #f7fbff;
        }
        .action svg {
          color: #f4f3e7;
        }
        @media (max-width: 768px) {
          .hero-actions {
            gap: 15px;
          }
          .action {
            flex: 1 1 calc(50% - 10px);
          }
        }
        @media (max-width: 480px) {
          .action {
            flex: 1 1 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;
