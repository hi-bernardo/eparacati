//React router components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";

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
               <Route path="/agendamento" element={<Agendamento />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
