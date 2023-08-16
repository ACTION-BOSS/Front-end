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
import { $isVerificationFailed } from '../../state';
import { useRecoilValue } from 'recoil';

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
  const isReadyForLogin = !(
    emailIdValue.length > 0 &&
    emailDomainValue.length > 0 &&
    passwordValue.length > 0
  );

  const isVerificationFailed = useRecoilValue($isVerificationFailed);

  return (
    <StWrapper>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>로그인 하기</StUpperText>
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
                'gmail.com',
                'hanmail.com',
              ]}
              $isError={isVerificationFailed}
            />
          )}
        </StFlexRowDiv>
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
      {isVerificationFailed && (
        <StLabelTextWrapper>
          <StLabel1Text $isCorrect={false}>
            이메일과 비밀번호를 확인해주세요
          </StLabel1Text>
        </StLabelTextWrapper>
      )}

      <StButtonWrapper>
        <Button
          label={'로그인'}
          $buttonTheme="blue"
          size="large"
          $bold
          onClick={onPressLoginButton}
          disabled={isReadyForLogin}
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

export const StButtonWrapper = styled.div`
  width: 328px;
  padding-top: 24px;
`;
