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
  width: 90%;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  padding-bottom: 30px;
  border-bottom: 1px solid ${Theme.colors.gray2};
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
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid ${Theme.colors.gray2};
  ${media.mobile`
  padding: 24px 0;
  gap: 12px;
  `}
`;
