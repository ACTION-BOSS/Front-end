import { FC, ReactNode } from 'react';
import { Header } from '../../../shared';
import styled from 'styled-components';
import { LOGO_FLAG, SKYLINE } from '../../../assets';
import { Navbar } from '../components';
import { Theme, media } from '../../../styles';

type MyPageLayoutProps = { children: ReactNode };

export const MyPageLayout: FC<MyPageLayoutProps> = ({ children }) => {
  return (
    <StLayoutWrapper>
      <Header />
      <StIllustWrapper>
        <StTitle>마이페이지</StTitle>
        <StSkyline />
      </StIllustWrapper>
      <StGraySection>
        <StContentWrapper>
          <StNavbarWrapper>
            <Navbar />
          </StNavbarWrapper>
          <StContainerWrapper>{children}</StContainerWrapper>
        </StContentWrapper>
        <StFooterFlagWrapper>
          <StFlagImg src={LOGO_FLAG} />
        </StFooterFlagWrapper>
      </StGraySection>
    </StLayoutWrapper>
  );
};

export const StLayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #f0f1f5;
`;

export const StContainerWrapper = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 120px 0px;
  ${media.tablet`
  padding: 60px 0px;
  `}
  ${media.mobile`
  padding: 45px 0px;
  `}
`;

export const StNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  flex: 1;
  flex-direction: column;

  ${media.tablet`
  flex-direction: row;
  margin-top: 28px;
  `}
  ${media.mobile`
  margin-top: 14px;
  `}
`;

export const StContentWrapper = styled.div`
  display: flex;

  ${media.tablet`
    flex-direction: column;
    padding-right: 70px;
    padding-left: 70px;
  `}
`;

export const StFooterFlagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 68px 0px 68px 0px;
  ${media.tablet`
  padding: 42px 35px 42px 0;
  `}
  ${media.mobile`
  padding: 20px 30px 20px 0;
  `}
`;

export const StFlagImg = styled.img`
  width: 80px;
`;

export const StGraySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f0f1f5;
`;

export const StIllustWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 84px;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  color: ${Theme.colors.blue};
  ${media.mobile`
  padding-top: 68px;
  `};
`;

export const StTitle = styled.div`
  color: ${Theme.colors.blue};
  font-size: ${Theme.fontSizes.h1};
  font-weight: ${Theme.fontWeights.h1};
  margin: 110px 0 30px 0;
  ${media.tablet`
  margin: 70px 0 30px 0;
  `};
  ${media.mobile`
  margin: 30px 0 20px 0;
  font-size: ${Theme.fontSizes.mH1};
  font-weight: ${Theme.fontWeights.mH1};
  `};
`;

export const StSkyline = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${SKYLINE});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  ${media.tablet`
  height: 72px;
  margin-bottom: 0px;
  `};
  ${media.mobile`
  height: 35px;
  `};
`;
