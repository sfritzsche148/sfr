import { useState } from "react";
import Home from "./components/LandingPage/Home";
import Navbar from "./components/Navbar/Navbar";
import BlogHome from "./components/Blog/BlogHome";
import CreatePost from "./components/Blog/CreatePost";
import Login from "./components/Blog/Login";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AGB from "./components/AGBs/AGB";




function App() {

  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/agb" element={<AGB />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
