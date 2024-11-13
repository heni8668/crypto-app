import { Route, Routes } from 'react-router-dom';
import '../src/dist/styles.css'
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import MarketUpdate from './pages/Market/MarketUpdate';
import WhyUs from './pages/WhyUs/WhyUs';
import Trade from './pages/Trade/Trade';
import Coin from './pages/Coin/Coin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketUpdate />} />
        <Route path="/choose-us" element={<WhyUs />} />
        <Route path="/trade" element={<Trade />} />
        <Route path='/coin' element={ <Coin /> }>
          <Route path=':coinId' element={ <Coin /> } />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
