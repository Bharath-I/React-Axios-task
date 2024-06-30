import  { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Edit from './Edit';
import Create from './Create';
import Footer from './Footer';
import User from './User';


const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User setId={setId}/>}/>
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
};

export default App;