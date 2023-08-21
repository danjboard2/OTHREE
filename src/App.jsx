import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/home/Index";
import Partners from "./pages/partners/Index";
import { useEffect } from "react";
import Ecosystem from "./pages/ecosystem/Index";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex justify-start items-start flex-col w-full">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Partners />} path="/partners" />
        <Route element={<Ecosystem />} path="/ecosystem" />
      </Routes>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
