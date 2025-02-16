import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import SignupContractor from './components/SignupContractor';
import ListingProduct from './components/listing_product';
import ListedProducts from './components/listed_product';
import ViewFarmers from './components/ViewFarmers';
import CreateContract from './components/CreateContract';
import ContractsList from './components/ContractLists';
import FarmerDashboard from './components/FarmerDashboard';
import ContractorDashboard from './components/ContractorDashboard';
import MyContracts from './components/MyContracts';
import ViewMyProducts from './components/ViewMyProducts';
import FarmerChat from './components/FarmerChat';
import ContractorChat from './components/ContractorChat';
import ListedFarmerProducts from './components/ListedFarmerProducts';
import ViewContractors from './components/ViewContractors';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FilterComponent from './components/FilterComponent';
import data from './data.json';



function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <FilterComponent data={data}/>
        </div>

        <Routes>
        <Route  path="/" element={<LandingPage/>} />
          <Route path="/list-product" element={<ListingProduct />} />
          <Route path="/listed-products" element={<ListedProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view-farmers" element={<ViewFarmers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup-contractor" element={<SignupContractor />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/marketplace" element={<ListedProducts />} /> 
          <Route path="/create-contract" element={<CreateContract />} />
          <Route path="/contracts" element={<ContractsList />} />
          <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
          <Route path="/my-contracts" element={<MyContracts />} />
          <Route path="/view-my-products" element={<ViewMyProducts />} />
          <Route path="/chat/farmer" element={<FarmerChat />} />
          <Route path="/chat" element={<ContractorChat />} />
          <Route path="/listed-farmer-products" element={<ListedFarmerProducts />} />
          <Route path="/view-contractors" element={<ViewContractors />} />
          <Route path="/" element={<h1>Welcome to Krushimitra</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
