import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: column;

  ${media.mobile`
  height: 100%;
  justify-content: space-between;
  `}
`;

export const StAtWrapper = styled.div`
  display: flex;
  flex: 0;
  padding: 8px;
`;

export const StVerificationInput = styled.input<{
  $isVerificated: boolean | null;
}>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: ${(props) => {
    return props.$isVerificated === false
      ? `1px solid ${Theme.colors.blue}`
      : props.$isVerificated === true
      ? `1px solid ${Theme.colors.pink}`
      : 'none';
  }};
  outline: none;
  &::placeholder {
    color: ${Theme.colors.gray4};
    font-size: ${Theme.fontSizes.label1};
    font-weight: 100;
  }
`;

export const StBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 24px;

  ${media.mobile`
  flex-direction: column-reverse;
  `}
`;

export const StTextL1 = styled.div`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Theme.colors.gray4};
`;

export const StTextL3 = styled.div`
  color: ${Theme.colors.gray7};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const StTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  ${media.mobile`
  `}
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

export const StGrayInput = styled.input<{
  $isError: boolean | null;
  width?: string;
}>`
  display: flex;
  width: ${(props) => (props.width === 'fluid' ? '100%' : '153px')};
  height: 42px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: ${(props) =>
    props.$isError ? `1px solid ${Theme.colors.pink}` : 'none'};
  outline: none;

  &::placeholder {
    color: ${Theme.colors.gray4};
    font-size: ${Theme.fontSizes.label1};
    font-weight: 100;
  }
`;

export const StFlexRowDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const StAtText = styled.p`
  color: ${Theme.colors.black};
  font-size: 12px;
  font-weight: 500;
`;

export const StLabelTextWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 8px;

  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 4px;
`;

export const StLabel1Text = styled.p<{
  $isCorrect?: boolean | null;
}>`
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};

  color: ${(props) =>
    props.$isCorrect === false
      ? Theme.colors.pink
      : props.$isCorrect === true
      ? Theme.colors.blue
      : Theme.colors.gray7};
`;

export const StColumnDiv = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 12px;

  flex-direction: column;
`;

export const StKakaoWrapper = styled.div`
  ${media.mobile`
  margin-bottom: 12px;
`}
`;
