import { Link } from "react-router-dom";
import Btc from "../../images/hero/bitcoin.png";
import Eth from "../../images/hero/ethereum.png";

function Trade() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="container">
          <div style={{ marginLeft: "40px" }} className="join-content">
            <img alt="coin_img" className="join-content__btc" src={Btc} />
            <img alt="coin_img" className="join-content__eth" src={Eth} />
            <div className="join-content__text">
              <h2>
                join us <br /> <span>now</span>
              </h2>
              <p>Invest and manage all your crypto at one place.</p>
              <Link rel="noreferrer" target="_blank" to="/">
                Join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trade;
