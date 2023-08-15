import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, DetailPage, Introduction, MainPage } from '../pages';
import { Header } from '../shared/Header';
import { TestPage } from '../pages/TestPage';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route path="/" element={<Introduction />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/detail:postId" element={<DetailPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};
