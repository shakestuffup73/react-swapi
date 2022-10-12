import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Starships from './pages/Starships/Starships'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Starships />}></Route>
      </Routes>
    </>
  );
}

export default App;
