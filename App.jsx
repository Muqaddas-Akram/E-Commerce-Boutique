// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Kids from "./pages/Product-Pages/Kids"
import Men from "./pages/Product-Pages/Men"
import Women from "./pages/Product-Pages/Women"
import Sale from "./pages/Product-Pages/Sale"
import NewArival from "./pages/Product-Pages/NewArival"
import OrderHistory from './pages/OrderHistory';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Dashboard from './admin/Dashboard';
import ManageProducts from './admin/ManageProducts';
import ManageOrders from './admin/ManageOrders';
import ManageUsers from './admin/ManageUsers';
import ManagePayments from './admin/ManagePayments';
const App = () => {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomeWithNavAndFooter />} />
        <Route path="/about" element={<AboutWithNavAndFooter />} />
        <Route path="/products" element={<ProductsWithNavAndFooter />} />
        <Route path="/kids" element={<KidsWithNavAndFooter />} />
        <Route path="/men" element={<MenWithNavAndFooter />} />
        <Route path="/sale" element={<SaleWithNavAndFooter />} />
        <Route path="/women" element={<WomenWithNavAndFooter />} />
        <Route path="/new" element={<NewArivalWithNavAndFooter />} />
        <Route path="/contact" element={<ContactWithNavAndFooter />} />
        <Route path="/order-history" element={<OrderHistoryWithNavAndFooter />} />
        <Route path="/login" element={<LogInWithoutNavAndFooter />} />
        <Route path="/signup" element={<SignUpWithoutNavAndFooter />} />
        <Route path="/admin" element={<DashboardWithoutNavAndFooter />} />
        <Route path="/admin/manage-products" element={<ManageProductsWithoutNavAndFooter />} />
        <Route path="/admin/manage-orders" element={<ManageOrdersWithoutNavAndFooter />} />
        <Route path="/admin/manage-users" element={<ManageUsersWithoutNavAndFooter />} />
        <Route path="/admin/manage-payments" element={<ManagePaymentsWithoutNavAndFooter />} />
      </Routes>
    </Router>
  );
};

const HomeWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

const AboutWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

const ProductsWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
};
const KidsWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Kids />
      <Footer />
    </>
  );
};
const MenWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Men />
      <Footer />
    </>
  );
};
const WomenWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Women/>
      <Footer />
    </>
  );
};
const SaleWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Sale />
      <Footer />
    </>
  );
};
const NewArivalWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <NewArival />
      <Footer />
    </>
  );
};

const ContactWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

const OrderHistoryWithNavAndFooter = () => {
  return (
    <>
      <Navbar />
      <OrderHistory />
      <Footer />
    </>
  );
};

const LogInWithoutNavAndFooter = () => {
  return <LogIn />;
};

const SignUpWithoutNavAndFooter = () => {
  return <SignUp />;
};
const DashboardWithoutNavAndFooter = () => {
  return <Dashboard />;
};
const ManageProductsWithoutNavAndFooter = () => {
  return <ManageProducts />;
};
const ManageOrdersWithoutNavAndFooter = () => {
  return <ManageOrders />;
};
const ManageUsersWithoutNavAndFooter = () => {
  return <ManageUsers />;
};
const ManagePaymentsWithoutNavAndFooter = () => {
  return <ManagePayments />;
};

export default App;
