import './App.css';
import {Routes, Route} from 'react-router-dom'
import Map from './pages/Map'
import {NotFound} from './pages/NotFound'
import  ToiletDetail from './pages/ToiletDetail';
import Navigation from './components/Navigation';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
    <Analytics />
    <Navigation/>
    <Routes>
      <Route index element={<Map/>}/>
      <Route path="/toilet/:city/:id" element={<ToiletDetail/>}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
