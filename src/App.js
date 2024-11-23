import { Route, Routes, useLocation } from 'react-router-dom';
import '../src/dist/styles.css'
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import MarketUpdate from './pages/Market/MarketUpdate';
import WhyUs from './pages/WhyUs/WhyUs';
import Trade from './pages/Trade/Trade';
import Coin from './pages/Coin/Coin';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

function App() {
   const location = useLocation();

   // Define routes where Navbar and Footer should not be displayed
   const hideNavbarFooterRoutes = ["/user", "/admin"];

   const shouldHideNavbarFooter = hideNavbarFooterRoutes.some((route) =>
     location.pathname.startsWith(route)
   );
  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketUpdate />} />
        <Route path="/choose-us" element={<WhyUs />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
