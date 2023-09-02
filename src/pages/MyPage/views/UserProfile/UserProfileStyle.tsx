import styled from 'styled-components';
import { FlagIcon } from '../../../../assets';
import { Theme } from '../../../../styles';

export const StViewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-right: 15vw;
`;

export const StTitleWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 13px 20px;
  margin-bottom: 12px;
  gap: 10px;
`;

export const StTitleText = styled.div`
display: flex;
color: ${Theme.colors.black}
text-align: center;

font-size: ${Theme.fontSizes.h2};
font-style: normal;
font-weight: ${Theme.fontWeights.h2};
line-height: normal;
`;

export const StContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${Theme.colors.gray2};
  border-bottom: 1px solid ${Theme.colors.gray2};

  gap: 60px;
  padding: 80px 20px 80px 20px;
`;

export const StyledFlagIcon = styled(FlagIcon)`
  width: 25px;
`;

export const StContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StPasswordContent = styled(StContent)`
  align-items: flex-start;
  flex-direction: column;
  gap: 18px;
`;

export const StSubTitleWrapper = styled.div`
  display: flex;
  width: 200px;
  color: ${Theme.colors.gray6};

  font-size: ${Theme.fontSizes.h2};
  font-style: normal;
  font-weight: ${Theme.fontWeights.h2};
  line-height: normal;
`;

export const StInputBox = styled.input<{ $isCorrect?: boolean | null }>`
  display: flex;
  width: 500px;
  height: 45px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  outline: none;

  border: ${({ $isCorrect }) => {
    if ($isCorrect === false) return `1px solid ${Theme.colors.pink}`;
    if ($isCorrect) return `1px solid ${Theme.colors.blue}`;
    return 'none';
  }};
  border-radius: 8px;
  background: ${Theme.colors.white};

  color: ${Theme.colors.gray7};
  font-family: Pretendard;
  font-size: ${Theme.fontSizes.body2};
  font-style: normal;
  font-weight: ${Theme.fontWeights.body2}
  line-height: 32px;
`;
export const StWarningText = styled.p`
  position: absolute;
  padding-top: 10px;
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
  color: ${Theme.colors.pink};
`;

export const StButton = styled.button`
  display: flex;
  width: 120px;
  height: 45px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border: none;
  border-radius: 12px;
  background: ${Theme.colors.gray2};
  box-shadow: 0px 0px 5px 0px rgba(41, 47, 61, 0.25);

  color: ${Theme.colors.gray1};
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StForm = styled.form`
  position: relative;
  display: flex;
  gap: 20px;
`;