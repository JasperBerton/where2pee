import './App.css';
import {Routes, Route} from 'react-router-dom'
import Map from './pages/Map'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route index element={<Map/>}/>
      <Route path='about' element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
