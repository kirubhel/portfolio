
import Home from "./components/Home";

import Resume from "./components/Resume";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
    
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>

    
  );
}

export default App;
