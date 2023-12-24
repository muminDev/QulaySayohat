import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Blogs from "./components/Blogs";
function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
