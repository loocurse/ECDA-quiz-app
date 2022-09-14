import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Evaluation from './pages/Evaluation';
import LeftDrawer from './components/LeftDrawer';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Report from './pages/Report';

function App() {
  return (
    <Router>
      <div className="mx-auto">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <NavBar />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="evaluation" element={<Evaluation />} />
              <Route path="report" element={<Report />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <LeftDrawer />
        </div>
      </div>
    </Router>
  );
}

export default App;
