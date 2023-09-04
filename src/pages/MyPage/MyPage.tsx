import { FC } from 'react';
import { MyPageContainer, useMyPageForm } from './container';
import { MyPageLayout } from './layout';
import { FormProvider } from 'react-hook-form';
import { RecoilProvider } from '../../providers';

type MyPageProps = {};

export const MyPage: FC<MyPageProps> = ({}) => {
  const { form } = useMyPageForm();
  return (
    <RecoilProvider>
      <FormProvider {...form}>
        <MyPageLayout>
          {/* <Suspense fallback={<div>Loading</div>}> */}
          <MyPageContainer />
          {/* </Suspense> */}
        </MyPageLayout>
      </FormProvider>
    </RecoilProvider>
  );
};
