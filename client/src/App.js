import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./component/NavBar";
import { ScreenHome } from "./screens/ScreenHome";
import Footer from "./screens/Footer";
function App() {
  return (
    <div className="App">
       <NavBar/>
       <ScreenHome/>
       <Footer/>
    </div>
  );
}

export default App;
