import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import HomeCards from './components/HomeCards.js';
import Menu from './components/Menu.js';
import Promotion from './components/Promotion.js';
import Reservation from './components/Reservation.js';
import Contactus from './components/Contactus.js';
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <HomeCards/>
      <Menu/>
      <Promotion/>
      <Reservation/>
      <Contactus/>
    </div>
  );
}

export default App;
