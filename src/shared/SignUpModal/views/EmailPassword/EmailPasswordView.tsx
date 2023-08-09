import { ChangeEvent, FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
import { Button } from '../../../Button';
type EmailPasswordViewProps = {
  emailValue: string;
  onChangeEmail: (...event: any[]) => void;
};

export const EmailPasswordView: FC<EmailPasswordViewProps> = ({
  emailValue,
  onChangeEmail,
}) => {
  return (
    <div>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>이메일 인증</StUpperText>
          <Button
            label="인증코드 보내기"
            $buttonTheme="emptyGray"
            size="xsmall"
            fontSize={Theme.fontSizes.label1}
            fontWeight={Theme.fontWeights.label1}
          />
        </StUpperSpaceDiv>
        <input
          value={emailValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChangeEmail(event.target.value);
          }}
        />
      </StColumnDiv>
    </div>
  );
};

export const StColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StUpperDiv = styled.div`
  display: flex;

  border-bottom: 0.5px solid ${Theme.colors.gray3};
`;

export const StUpperSpaceDiv = styled(StUpperDiv)`
  justify-content: space-between;
`;

export const StUpperText = styled.p`
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  color: ${Theme.colors.black};
`;
