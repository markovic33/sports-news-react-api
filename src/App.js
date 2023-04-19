import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import FetchData from './components/FetchData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/football' element={<FetchData cat="football" />} />
          <Route path='/basketball' element={<FetchData cat="basketball" />} />
          <Route path='/hockey' element={<FetchData cat="hockey" />} />
          <Route path='/volleyball' element={<FetchData cat="volleyball" />} />
          <Route path='/rugby' element={<FetchData cat="rugby" />} />
          <Route path='/tennis' element={<FetchData cat="tennis" />} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
