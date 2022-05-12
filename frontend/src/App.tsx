import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import List from "./pages/List";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/list" element={<List />} /> 
        <Route path='/edit'>
          <Route path=":movieId" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
