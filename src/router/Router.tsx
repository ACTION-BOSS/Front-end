import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost } from '../pages/CreatePost/CreatePost';
import { Introduction } from '../pages/Introduction/Introduction';

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
