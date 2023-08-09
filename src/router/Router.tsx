import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../shared/Header';
import MainPage from '../pages/MainPage/MainPage';
import { CreatePost } from '../pages/CreatePost/CreatePost';
import { Introduction } from '../pages/Introduction/Introduction';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route path="/" element={<Introduction />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};
