//Components
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import Anchor from "./components/layout/Anchor";

function App() {
   return (
      <>
         <Menu />
         <Footer />
         <Anchor title="Isso é um link" href="https://github.com" target="_blank"/>
      </>
   );
}

export default App;
