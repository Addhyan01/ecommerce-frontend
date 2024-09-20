
import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav />
      
      <Routes>
        <Route element={<PrivateComponent />}>
              <Route path="/" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route path="/logout" element={<h1>Logout Product Listing Component</h1>} />
              <Route path="/profile" element={<h1>Progile Product Listing Component</h1>} />
        </Route>
        <Route path="/signup" element={<SignUp /> } />
        <Route path="/login" element={<Login /> } />
      </Routes>
       </BrowserRouter>
       <Footer />
    </div>
  );
}

export default App;
