import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import Home from './components/Home';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>

  );
}

export default App;
