import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  OAuthPage,
  CreatePost,
  DetailPage,
  Introduction,
  MainPage,
  NotFoundPage,
  TestPage,
  OAuthCallbackPage,
  MyPage,
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
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
          <Route path="/oauth" element={<OAuthPage />} />
          <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};
