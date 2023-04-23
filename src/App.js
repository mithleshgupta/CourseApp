import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Service from "./Components/Service";
import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/Contacts.scss";
import "./Styles/MediaQ.scss";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
