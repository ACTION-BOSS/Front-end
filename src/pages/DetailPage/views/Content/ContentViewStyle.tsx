import styled from 'styled-components';
import { Theme, media } from '../../../../styles';
import { KebobIcon, PenceilIcon } from '../../../../assets';

export const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  border-bottom: 1px solid ${Theme.colors.gray1};

  margin-bottom: 36px;
  border-radius: 20px;

  ${media.mobile`
      border-radius: 0px;
  `}
`;

export const StTitle = styled.div`
  padding: 20px;

  color: ${Theme.colors.black};
  font-size: ${Theme.fontSizes.h1};
  font-weight: ${Theme.fontWeights.h1};
  ${media.mobile`
  flex:1;
  font-size: ${Theme.fontSizes.mH2};
  padding: 20px 0px;
  `}
`;

export const StWriterInfo = styled.div`
  display: flex;
  align-items: center;

  color: ${Theme.colors.gray6};
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.body4};
  gap: 10px;

  ${media.tablet`
  font-size: 13px;
  font-weight: ${Theme.fontWeights.mBody3};
  gap: 4px;
  align-self: flex-end;
  `}

  ${media.mobile`
  font-size: ${Theme.fontSizes.mBody3};
  font-weight: ${Theme.fontWeights.mBody3};
  `}
`;

export const StTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.mobile`
     display: flex;
     flex-direction : column;
  `}
`;

export const StContentWrapper = styled.div`
  padding-bottom: 20px;
  word-wrap: break-word;
`;

export const StContentWord = styled.p`
  align-self: stretch;

  color: ${Theme.colors.gray8};
  font-size: ${Theme.fontSizes.body2};
  font-weight: ${Theme.fontWeights.body2};
  line-height: 26px;
  padding: 20px;

  ${media.mobile`
    font-size: ${Theme.fontSizes.mBody2};
    font-weight: ${Theme.fontWeights.mBody2};
    padding: 20px 0px;
  `}
`;

export const StHowManyWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  ${media.mobile`
  font-size: ${Theme.fontSizes.mL1};
  font-weight: ${Theme.fontWeights.mL1};
  color :  ${Theme.colors.gray7};
  `}
`;

export const StHowManyLetters = styled.div`
  color: ${Theme.colors.gray7};
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};

  ${media.mobile`
  font-size: ${Theme.fontSizes.mL1};
  font-weight: ${Theme.fontWeights.mL1};
  color :  ${Theme.colors.gray7};
  `}
`;

export const StKebobIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
`;

export const StyledKebob = styled(KebobIcon)`
  width: 30px;
  height: auto;
`;

export const StModifyButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 94px;
  padding: 12px;
  box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
  border-radius: 8px;
  background-color: ${Theme.colors.white};
  overflow: hidden;
`;

export const StyledPencilIcon = styled(PenceilIcon)`
  width: 18px;
  height: auto;
`;

export const StRowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  padding-bottom: 10px;

  &:last-child {
    padding-top: 10px;
    border-top: 1px solid ${Theme.colors.gray2};
  }
`;

export const StRowText = styled.p<{ color: string }>`
  display: inline-flex;
  padding: 4px;
  justify-content: center;
  align-items: center;

  color: ${({ color }) => color};
  font-size: ${Theme.fontSizes.mH2};
  font-weight: ${Theme.fontWeights.mH2};
`;
