import { Route, Routes } from 'react-router-dom';
import './App.css';
import Almanac from './components/content/Almanac/Almanac';
import Contacts from './components/content/Contacts/Contacts';
import Home from './components/content/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/content/Login/Login';
import HtmlAlmanac from './components/content/Almanac/HtmlAlmanac/HtmlAlmanac';
import Notes from './components/content/Notes/Notes';
import { Container } from '@mui/material';



function App() {
  return (

    <div className='wrapper'>

      <Navbar />


        <Routes>

          {/* Navbar Routes */}
          <Route path="website-react/" element={<Home />} />
          <Route path="/almanac" element={<Almanac />} />
          <Route path="/todo" element={<Notes />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />

          {/* Almanac Routes */}
          <Route path="almanac-html" element={<HtmlAlmanac />} />

        </Routes>


    </div>
  );
}

export default App;
