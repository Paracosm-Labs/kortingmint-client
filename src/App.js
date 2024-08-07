import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import PartnerDashboard from './pages/partnerDashboard';
import BusinessDashboard from './pages/businessDashboard';
import Redemptions from './pages/redemptions';
import Credit from './pages/credit';
import Marketplace from './pages/marketplace';
import CustomerCoupons from './pages/customerCoupons';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/dashboard/partner" element={<PartnerDashboard/>} />
          <Route path="/dashboard/business" element={<BusinessDashboard/>}/>
          <Route path="dashboard/business/redemptions" element={<Redemptions/>}/>
          <Route path="dashboard/business/credit" element={<Credit/>}/>
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/marketplace/mycoupons" element={<CustomerCoupons/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;