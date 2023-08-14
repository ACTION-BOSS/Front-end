import { FC } from 'react';
import { SelectBox } from '../../../SignUpModal/components';
import {
  StUpperSpaceDiv,
  StUpperText,
  StFlexRowDiv,
  StGrayInput,
  StAtText,
  StLabelTextWrapper,
  StLabel1Text,
  StColumnDiv,
} from '../../../SignUpModal/views/style';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
import { Button } from '../../../../shared/Button';

type EmailPasswordViewProps = {
  emailIdValue: string;
  onChangeEmailId: (...event: any[]) => void;
  emailDomainValue: string;
  onChangeEmailDomain: (...event: any[]) => void;
  isSelfTypeMode: boolean;
  setToSelfTypeMode: () => void;
  onChangePassword: (...event: any[]) => void;
  passwordValue: string;
  onPressLoginButton: () => void;
};

export const EmailPasswordView: FC<EmailPasswordViewProps> = ({
  emailIdValue,
  onChangeEmailId,
  emailDomainValue,
  onChangeEmailDomain,
  isSelfTypeMode,
  setToSelfTypeMode,
  onChangePassword,
  passwordValue,
  onPressLoginButton,
}) => {
  const isVerificationFailed = false;

  return (
    <StWrapper>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>이메일 인증</StUpperText>
        </StUpperSpaceDiv>
        <StFlexRowDiv>
          <StGrayInput
            value={emailIdValue}
            onChange={onChangeEmailId}
            placeholder="example"
            $isError={isVerificationFailed}
          />
          <StAtText>@</StAtText>
          {isSelfTypeMode ? (
            <StGrayInput
              value={emailDomainValue}
              onChange={onChangeEmailDomain}
              $isError={isVerificationFailed}
            />
          ) : (
            <SelectBox
              setToSelfTypeMode={setToSelfTypeMode}
              initialOptions={[
                '직접입력',
                'naver.com',
                'gamil.com',
                'hanmail.com',
              ]}
              $isError={isVerificationFailed}
            />
          )}
        </StFlexRowDiv>
        {isVerificationFailed && (
          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={false}>
              잘못된 이메일 형식입니다
            </StLabel1Text>
          </StLabelTextWrapper>
        )}
      </StColumnDiv>
      <StVerificationInput
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={passwordValue}
        onChange={(e) => {
          onChangePassword(e.target.value);
        }}
        $isVerificated={isVerificationFailed}
      />

      <StButtonWrapper>
        <Button
          label={'로그인'}
          $buttonTheme="blue"
          size="large"
          $bold
          onClick={onPressLoginButton}
          disabled={isVerificationFailed}
        />
      </StButtonWrapper>
    </StWrapper>
  );
};

export const StWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const StVerificationInput = styled.input<{
  $isVerificated: boolean | null;
}>`
  display: flex;
  justify-content: space-between;
  height: 42px;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: ${(props) => {
    return props.$isVerificated === true
      ? `1px solid ${Theme.colors.blue}`
      : props.$isVerificated === false
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

export const StButtonWrapper = styled.div`
  width: 328px;
  padding-top: 24px;
`;
