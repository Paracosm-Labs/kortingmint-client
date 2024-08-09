import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import PartnerDashboard from './pages/partnerDashboard';
import BusinessDashboard from './pages/clubDashboard';
import DealManagement from './pages/dealManagement';
import Redemptions from './pages/redemptions';
import CreditManagement from './pages/creditManagement';
import ExploreClubs from './pages/exploreClubs';
import CustomerClubs from './pages/myClubs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/dashboard/partner" element={<PartnerDashboard/>} />
          <Route path="/dashboard/club" element={<BusinessDashboard/>}/>
          <Route path="/dashboard/business/manage-deals" element={<DealManagement/>}/>
          <Route path="dashboard/business/redemptions" element={<Redemptions/>}/>
          <Route path="dashboard/business/credit" element={<CreditManagement/>}/>
          <Route path="/explore" element={<ExploreClubs/>} />
          <Route path="/explore/myclubs" element={<CustomerClubs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;