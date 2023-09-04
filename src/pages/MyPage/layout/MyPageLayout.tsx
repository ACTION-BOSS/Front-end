import { FC, ReactNode } from 'react';
import { Header } from '../../../shared';
import styled from 'styled-components';
import { LOGO_FLAG, SKYLINE } from '../../../assets';
import { Navbar } from '../components';
import { media } from '../../../styles';

type MyPageLayoutProps = { children: ReactNode };

export const MyPageLayout: FC<MyPageLayoutProps> = ({ children }) => {
  return (
    <StLayoutWrapper>
      <Header />
      <StIllustWrapper>
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
`;

export const StNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  flex: 1;
  flex-direction: column;

  ${media.tablet`
  flex-direction: row;
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
  padding-top: 20vh;
  background-color: white;
`;

export const StSkyline = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${SKYLINE});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
`;
