import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import Gallery from '@pages/Gallery/Gallery';
import About from '@pages/About/About';
import Projects from '@pages/Projects/Projects';
import Contact from '@pages/Contact/Contact';
import '@styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
