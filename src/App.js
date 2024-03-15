import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveDashboard from "./components/Dashboard/ResponsiveDashboard";
import ResponsiveFooter from "./components/Footer/ResponsiveFooter";
import ResponsiveAppBar from "./components/Header/ResponsiveAppBar";
import ResponsiveOrder from "./components/Order/ResponsiveOrder";
import ResponsiveProduct from "./components/Product/ResponsiveProduct";
import ResponsiveCalender from "./components/Calender/ResponsiveCalender";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ResponsiveAppBar />
                <ResponsiveDashboard />
                <ResponsiveFooter />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <ResponsiveAppBar />
                <ResponsiveProduct />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <ResponsiveAppBar />
                <ResponsiveOrder />
              </>
            }
          />

          <Route
            path="/calender"
            element={
              <>
                <ResponsiveAppBar />
                <ResponsiveCalender />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* 
      <ResponsiveProduct/>
       <ResponsiveDashboard />
      <ResponsiveFooter />
      <ResponsiveOrder /> <ResponsiveCalender />
      <ResponsiveAppBar />
      <ResponsiveOrder />*/}
    </div>
  );
}

export default App;
