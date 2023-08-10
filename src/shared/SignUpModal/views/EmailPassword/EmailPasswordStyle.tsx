import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;

  flex-direction: column;
`;

export const StColumnDiv = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const StUpperDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 14px;

  border-bottom: 0.5px solid ${Theme.colors.gray3};
`;

export const StUpperSpaceDiv = styled(StUpperDiv)`
  justify-content: space-between;
`;

export const StUpperText = styled.div`
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  color: ${Theme.colors.gray7};

  padding-left: 5px;
  padding-right: 5px;
`;

export const StButtonWrapper = styled.div`
  width: 88px;

  margin-left: 5px;
  margin-right: 5px;
`;

export const StGrayInput = styled.input`
  display: flex;
  width: 153px;
  height: 42px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: none;
  outline: none;
`;

export const StVerificationInput = styled.input`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 42px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: none;
  outline: none;
`;

export const StFlexRowDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const StRelativeDiv = styled(StFlexRowDiv)`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StAtText = styled.p`
  color: ${Theme.colors.black};
  font-size: 12px;
  font-weight: 500;
`;

export const StTimerText = styled.div`
  right: 80px;
  position: absolute;
  text-align: center;
  color: ${Theme.colors.gray6};
  font-size: ${Theme.fontSizes.label2};
  font-weight: ${Theme.fontWeights.label2};
`;

export const StVerificationButtonWrapper = styled.div`
  position: absolute;
  right: 12px;
`;

export const StLabelTextWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 11px;

  padding-left: 5px;
  padding-right: 5px;
`;

export const StLabel1Text = styled.p`
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};

  color: ${Theme.colors.gray7};
`;

export const StLabel3Text = styled.p`
  font-size: ${Theme.fontSizes.label3};
  font-weight: ${Theme.fontWeights.label3};

  text-decoration-line: underline;

  color: ${Theme.colors.gray7};
`;
