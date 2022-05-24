import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Home/Login/Login';
import Reviews from './Pages/Shared/Reviews/Reviews';
import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/Services/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/Home/Login/Signup';
import RequireAuth from './Pages/Home/Login/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:serviceId" element={<RequireAuth>
          <ServiceDetail></ServiceDetail>
        </RequireAuth>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
