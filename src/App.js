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
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/DashBoard/Dashboard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import ManageAllOrders from './Pages/DashBoard/ManageAllOrders';
import AddAProduct from './Pages/DashBoard/AddAProduct';
import ManageProduct from './Pages/DashBoard/ManageProduct';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Home/Login/RequireAdmin';
import SeeReviews from './Pages/Shared/Reviews/SeeReviews';
import Rev from './Pages/Shared/Reviews/Rev';

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
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='orders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='added' element={<RequireAdmin><AddAProduct></AddAProduct></RequireAdmin>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manage' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/set" element={<SeeReviews />} />
        <Route path="/see" element={<Rev />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
