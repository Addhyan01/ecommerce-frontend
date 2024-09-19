
import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
              <Route path="/" element={<h1>Product Listing Component</h1>} />
              <Route path="/add" element={<h1>Add Product Listing Component</h1>} />
              <Route path="/update" element={<h1>update Product Listing Component</h1>} />
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
