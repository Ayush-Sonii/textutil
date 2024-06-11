import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Feedback from './Components/Feedback';
function App() {
  return (
    <>
      {/* <Navbar/>
      <Home/>
      <Feedback/> */}
      <Router>
           <Navbar/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/feedback' element={< Feedback />}></Route>
          </Routes>
       </Router>
    </>
  );
}

export default App;
