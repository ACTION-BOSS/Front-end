import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { Header } from '../shared/Header';
import MainPage from '../pages/MainPage/MainPage';
=======
import { CreatePost } from '../pages/CreatePost/CreatePost';
import { Introduction } from '../pages/Introduction/Introduction';
>>>>>>> develop

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
        </Route>
=======
        <Route path="/" element={<Introduction />} />
        <Route path="/create" element={<CreatePost />} />
>>>>>>> develop
      </Routes>
    </BrowserRouter>
  );
};
