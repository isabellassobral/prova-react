import {
  BrowserRouter as Router
} from "react-router-dom";
import {Routes} from './routes'
import Header from './components/template/Header/Header'
import Footer from './components/template/Footer/Footer'
import Sidebar from "./components/template/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'

function App() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Router>
        <Routes/>
      </Router>
      <Footer />
    </>
  );
}

export default App;
