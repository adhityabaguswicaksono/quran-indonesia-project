import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/mainPage';
import NotFoundPage from './components/notFound';
import SurahPage from './components/surahPage';
import TentangKamiPage from './components/tentangKamiPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/surah/:surah_id' element={<SurahPage/>}/>
        <Route path='/tentang-kami/' element={<TentangKamiPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
