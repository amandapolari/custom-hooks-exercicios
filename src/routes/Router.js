import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersListPage from '../pages/CharactersListPage';
import FilmListPage from '../pages/FilmListPage';
import { Header } from '../components/Header/Header';
import StarShipsListPage from '../pages/StarShipsListPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<CharactersListPage />} />
                <Route path="/films" element={<FilmListPage />} />
                <Route path="/starships" element={<StarShipsListPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
