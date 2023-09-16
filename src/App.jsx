import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";

//Components
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App() {
   return (
      <>
         <Router>
            <Menu />
            <Routes>
               <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
