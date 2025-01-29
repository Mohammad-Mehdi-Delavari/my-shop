import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
