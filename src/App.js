import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<AboutMe></AboutMe>}/>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}/>
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="/resume" element={<Resume></Resume>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
