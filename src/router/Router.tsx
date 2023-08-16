import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, Introduction, MainPage } from '../pages';
import { Header } from '../shared/Header';
import { TestPage } from '../pages/TestPage';
import { EditPost } from '../pages/EditPost';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/" element={<Introduction />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};
