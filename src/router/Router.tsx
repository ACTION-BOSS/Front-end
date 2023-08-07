import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../shared/Header';
import MainPage from '../pages/MainPage/MainPage';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
