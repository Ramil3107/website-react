import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/content/AboutMe/AboutMe';
import Contacts from './components/content/Contacts/Contacts';
import ToDo from './components/content/ToDo/ToDo';
import Footer from './components/Footer/Footer';
import Home from './components/content/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/content/Login/Login';



function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>

        <Navbar />

        <div className='content'>
          <Routes>
            <Route path="website-react/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
