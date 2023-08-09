import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, Introduction } from '../pages';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};
