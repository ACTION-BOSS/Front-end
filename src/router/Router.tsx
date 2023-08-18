import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePost, DetailPage, Introduction, MainPage } from '../pages';
import { Header } from '../shared/Header';
import { TestPage } from '../pages/TestPage';
import { EditPost } from '../pages/EditPost';
import { ModalProvider } from '../providers';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route element={<Header />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/" element={<Introduction />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/detail/:postId" element={<DetailPage />} />
            <Route path="/test" element={<TestPage />} />
          </Route>
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};
