import  { BrowserRouter as Router, Routes, Route}   from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Recettes from './pages/Recettes_page';
import Contact from './pages/Contact';


function App() {
  return (
    <body>

<Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Recettes' element={<Recettes/>} />
      </Routes>
      <Footer />
    </Router>

    </body>
  );
}

export default App;
