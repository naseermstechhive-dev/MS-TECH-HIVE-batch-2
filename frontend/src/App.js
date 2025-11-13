import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import About from './Pages/About';

import IndustriesPage from './Pages/IndustriesPage';
import Services from './Pages/Services';
import Contact from "./Pages/Contact";
import ClinicLab from './Components/Industries/ClinicLab';
import College from './Components/Industries/College';
import Construction from './Components/Industries/Construction';
import Ecommerce from './Components/Industries/Ecommerce';
import Hospital from './Components/Industries/Hospital';
import Logistics from './Components/Industries/Logistics';
import Restaurant from './Components/Industries/Restaurant';
import RetaileShop from './Components/Industries/RetaileShop';
import School from './Components/Industries/School';
import ITCompany from './Components/Industries/ITCompany';
import Office from './Components/Industries/Office';
import IndustriesSection from './Components/IndustriesSections';


function App() {
  return (
    // ⚡ No need to manually apply "dark", ThemeContext handles it on <html>
    <div className="bg-white dark:bg-[#0c121d] text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/service" element={<Services />} />
          <Route path="/clinicLab" element={<ClinicLab />} />
          <Route path="/college" element={<College />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/office" element={<Office />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/retaileShop" element={<RetaileShop />} />
          <Route path="/school" element={<School />} />
          <Route path="/itCompany" element={<ITCompany />} />
          <Route path="/industrieSection" element={<IndustriesSection />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
