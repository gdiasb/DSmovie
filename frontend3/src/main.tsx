import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './main.scss';

import Navbar from './components/Navbar/navbar';

import Home from './pages/Home/home';
import Rate from './pages/Rate/rate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/list" element={<List />} /> */
      <Route path="/rate">
        <Route path=":movieId" element={<Rate />} />
      </Route> }
    </Routes>
  </BrowserRouter>
);
