import {HashRouter as Router, Routes, Route,useLocation} from 'react-router-dom'
import AboutPage from './pages/About';
import './App.css';
import SignupLogin from "./Component/signuplogin";
import "../src/CSS Files/signuplogin.css";

function Layout() {
  return (
    <div>
        <Routes>
        <Route path='/about' element={<AboutPage/>} />
        </Routes>
    </div>
);
}


function App() {
  return (
    <Router>
          <Layout />
      </Router>
  );
  return <SignupLogin />;
}

export default App;
