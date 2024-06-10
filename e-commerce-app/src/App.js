import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

