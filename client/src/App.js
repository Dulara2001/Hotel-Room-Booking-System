import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes ,Route, Link}from 'react-router-dom'
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/home" element={<Homescreen/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
