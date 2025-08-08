import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import BussinessCard from "./pages/BussinessCard";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BussinessCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App