import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, Introduction, MainPage } from '../pages';
import { Header } from '../shared/Header';

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
