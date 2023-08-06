import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Introduction } from '../pages/Introduction/Introduction';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
      </Routes>
    </BrowserRouter>
  );
};
