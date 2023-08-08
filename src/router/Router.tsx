import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, Introduction, TestPage } from '../pages';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};
