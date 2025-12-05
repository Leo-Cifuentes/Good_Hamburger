import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import './App.css';
import { OrderProvider } from "./components/OrderContext";


function App() {
  return (
    <>
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h2>404 - Site not found</h2>} />
        </Routes>
      </BrowserRouter>
      </OrderProvider>
    </>
  )
}

export default App
