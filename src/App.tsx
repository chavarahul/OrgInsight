import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Companies, Home, NotFound } from "./pages";
import {  Providers } from "./components";

const App = () => {
  return (
    <Router>
        <Providers>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
        </Providers>
    </Router>
  );
};

export default App;
