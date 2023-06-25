import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CalCgpa from './components/CalCgpa';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalSgpa from './components/CalSgpa';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<CalSgpa />} />
          <Route exact path="/calcgpa" element={<CalCgpa />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
