import './App.css';
import {Routes, Route} from 'react-router-dom'
import Map from './pages/Map'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'
import  ToiletDetail from './pages/ToiletDetail';
import ToiletForm from './pages/ToiletForm';
import AuthLanding from './components/AuthLanding';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route index element={<Map/>}/>
      <Route path='about' element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/toilet/:id" element={<ToiletDetail/>}></Route>
      <Route path="/toilet/error/:id" element={<ToiletForm/>}></Route>
      <Route path="/login" element={<AuthLanding />} />
    </Routes>
    </>
  );
}

export default App;
