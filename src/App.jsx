import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Routes path="/" element={<Homepage />} />
        <Route Routes path="product" element={<Product />} />
        <Route Routes path="pricing" element={<Pricing />} />
        <Route Routes path="app" element={<AppLayout />} />
        <Route Routes path="*" element={<PageNotFound />} />
        <Route Routes path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
