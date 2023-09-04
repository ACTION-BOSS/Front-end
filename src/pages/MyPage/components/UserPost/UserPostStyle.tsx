import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const UserPost = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const PostTitle = styled.div`
  font-size: ${Theme.fontSizes.body1};
  font-weight: ${Theme.fontWeights.body1};
  flex: 1;
  ${media.mobile`
  font-size: ${Theme.fontSizes.mH3};
  font-weight: ${Theme.fontWeights.mH3};`}
`;

export const PostContent = styled.div`
  display: flex;
  gap: 20px;
  font-size: ${Theme.fontSizes.label3};
  font-weight: ${Theme.fontWeights.label3};
  ${media.mobile`
  gap: 10px;
  font-size: ${Theme.fontSizes.mBody3};
  font-weight: ${Theme.fontWeights.mBody3};
  `}
`;

export const DoneAndUncom = styled.div`
  display: flex;
  height: 35px;
  border-radius: 20px;
  gap: 10px;
  padding: 6px 15px;
  background-color: ${Theme.colors.white};
  ${media.mobile`
  padding: 5px 10px;
  height: 30px;
  gap: 5px;
  `}
`;

export const isDone = styled.div<{ $isDone: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${({ $isDone }) => ($isDone ? Theme.colors.blue : Theme.colors.gray3)};
  ${media.mobile`
  div{
    display:none;
  }`}
`;
export const Uncom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${Theme.colors.pink};
`;

export const DateAndTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: ${Theme.colors.gray4};
  margin-right: 10px;
  ${media.mobile`
  gap: 10px;
  font-size: ${Theme.fontSizes.mBody2};
  font-weight: ${Theme.fontWeights.mBody2};
  `}
  .line {
    height: 15px;
    border-right: 1px solid ${Theme.colors.gray4};
  }
`;
