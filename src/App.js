import './assets/css/bootstrap-grid.min.css';
import './assets/css/App.css';
import Index from './pages/Index';
import axios from 'axios';
import {
  HashRouter  as Router,
  Routes,
  Route
} from "react-router-dom";
import DeviceList from './pages/DeviceList';

axios.defaults.baseURL = "https://onnacdn.xyz/"

function App() {
  return (
    <Router>

      <div className="App">
          <Routes>
            <Route key={1} path="/" element={<DeviceList />} />
            <Route key={2} path="/device/:id" element={<Index />} />
          </Routes>

      </div>

    </Router>
  );
}

export default App;
