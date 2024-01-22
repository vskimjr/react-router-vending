import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkChocolate from './DarkChocolate';
import WhiteChocolate from './WhiteChocolate';
import MilkChocolate from './MilkChocolate';
import NavBar from './NavBar';

/** App for vending machine
 *
 * Props:
 * - none
 *
 * State:
 * - none
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/darkchocolate" element={<DarkChocolate/>} />
        <Route path="/whitechocolate" element={<WhiteChocolate/>} />
        <Route path="/milkchocolate" element={<MilkChocolate/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
