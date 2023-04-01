import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";
import Addon from "./Addon";

function App() {
  return (
    <div className="container d-flex">
      <div className="Header">
        <Header titulo={"Galería de Imágenes"} />
        <div className="Cards">
          <Cards />
        </div>
        <div className="container d-flex" style={{ padding: "20px" }}>
          <div class="g-col-6" style={{ padding: "20px" }}>
            <Addon />
          </div>
          <div class="g-col-6"  style={{ padding: "20px" }}>
            <Addon />
          </div>
          <div class="g-col-6"  style={{ padding: "20px" }}>
            <Addon />
          </div>
        </div>
        <div className="Footer" style={{ padding: "20px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
