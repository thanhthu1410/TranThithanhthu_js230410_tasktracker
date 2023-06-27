
import './App.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Body from './component/Body';
import About from './component/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>}>
          </Route>
          <Route path='about' element={<About />}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
