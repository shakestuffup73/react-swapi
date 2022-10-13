import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Starships from './pages/Starships/Starships'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Starships />}></Route>
        <Route path='/starship' element={<StarshipDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
