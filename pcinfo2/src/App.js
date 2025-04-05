import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/About';
import SignupLogin from './Components/signuplogin';
import './App.css';

function Layout() {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<SignupLogin />} />
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
}

export default App;
