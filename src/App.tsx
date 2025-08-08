import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import BussinessCard from "./pages/BussinessCard";
import QRCodePage from "./pages/QRCodePage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<BussinessCard />} />
          <Route path="/qrcode" element={<QRCodePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App