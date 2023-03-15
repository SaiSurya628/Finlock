import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import HomePage from './components/HomePage';
import './App.css';
import Protectedroute from './components/Protectedroute';

const App=()=>(
  <BrowserRouter>
  <div>
    <Routes>
      <Route  element={<Protectedroute/>}>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/home" element={<HomePage/>}/>
      </Route>
    </Routes>
  </div>
  </BrowserRouter>
)

export default App;
