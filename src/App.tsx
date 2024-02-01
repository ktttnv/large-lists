import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import List1Page from './pages/List1Page';
import List2Page from './pages/List2Page';
import List3Page from './pages/List3Page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list1" element={<List1Page />} />
        <Route path="/list2" element={<List2Page />} />
        <Route path="/list3" element={<List3Page />} />
      </Routes>
    </div>
  );
}

export default App;
