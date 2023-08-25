import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AuthPage,
  CreatePost,
  DetailPage,
  Introduction,
  MainPage,
  NotFoundPage,
  TestPage,
} from '../pages';
import { Header } from '../shared/Header';
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
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};
