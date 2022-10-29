import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
