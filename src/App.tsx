import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import MaishiyXizmatlar from "./components/MaishiyXizmatlar";
import DavlatXizmatlari from "./components/DavlatXizmatlari";
import IjaraMashinalar from "./components/IjaraMashinalar";
import IjaraUylar from "./components/IjaraUylar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<MainPage />} />
            <Route path="MaishiyXizmatlar" element={<MaishiyXizmatlar />} />
            <Route path="DavlatXizmatlari" element={<DavlatXizmatlari />} />
            <Route path="IjaraMashinalar" element={<IjaraMashinalar />} />
            <Route path="IjaraUylar" element={<IjaraUylar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
