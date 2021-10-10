import "./App.css";
import AOS from 'aos'
import Layout from './components/Layout'
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  AOS.init()
  return (
    <Router>
      <Layout></Layout>
    </Router>
  );
}

export default App;
