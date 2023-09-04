import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';
import { StyledFlagIcon } from '../UserProfile/UserProfileStyle';

export const UserPostsView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserPostsTitle = styled.div`
  width: 85%;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  padding-bottom: 30px;
  border-bottom: 1px solid ${Theme.colors.gray2};
  ${media.tablet`
  width: 90%`}
  ${media.mobile`
  gap: 5px;
  font-size: ${Theme.fontSizes.mH2};
  font-weight: ${Theme.fontWeights.mH2};
  padding-bottom: 16px;
  `}
`;

export const StyledFlag = styled(StyledFlagIcon)`
  ${media.mobile`
  width: 20px;
  height: 14px;`}
`;

export const UserPosts = styled.div`
  padding: 40px 0;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 586px;
  border-bottom: 1px solid ${Theme.colors.gray2};
  ${media.tablet`
  width: 90%`}
  ${media.mobile`
  padding: 24px 0;
  gap: 12px;
  height: 471px;
  `}
`;

export const PageNumberContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const PageNumbers = styled.div<{ $isChosen: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  font-size: ${Theme.fontWeights.body3};
  font-weight: ${Theme.fontWeights.body3};
  background-color: ${({ $isChosen }) =>
    $isChosen ? Theme.colors.white : 'none'};
  color: ${({ $isChosen }) => ($isChosen ? Theme.colors.blue : 'none')};
  cursor: pointer;
  ${media.mobile`
  width: 25px;
  height: 25px;
  font-size: ${Theme.fontWeights.mBody1};
  font-weight: ${Theme.fontWeights.mBody1};
  `}
`;
