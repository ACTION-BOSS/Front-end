import { FC } from 'react';
import { $isVerificationFailed } from '../../state';
import { useRecoilValue } from 'recoil';
import { EModalType, useModal } from '../../../../providers';
import { SelectBox } from '../../../SignUpModal';
import { Button } from '../../../../shared';
import {
  StWrapper,
  StColumnDiv,
  StUpperSpaceDiv,
  StUpperText,
  StFlexRowDiv,
  StGrayInput,
  StAtText,
  StVerificationInput,
  StLabelTextWrapper,
  StLabel1Text,
  StBottomWrapper,
  StTextWrapper,
  StTextL1,
  StTextL3,
  StAtWrapper,
  StKakaoWrapper,
  StPaddingDiv,
} from './EmailPasswordStyle';

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
  const { closeModal, openModal } = useModal();
  const isReadyForLogin = !(
    emailIdValue.length > 0 &&
    emailDomainValue.length > 0 &&
    passwordValue.length > 0
  );

  const isVerificationFailed = useRecoilValue($isVerificationFailed);

  const handleClickSignup = () => {
    closeModal();
    openModal(EModalType.SIGN_UP);
  };

  return (
    <StWrapper>
      <div>
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
              width="fluid"
            />
            <StAtWrapper>
              <StAtText>@</StAtText>
            </StAtWrapper>
            {isSelfTypeMode ? (
              <StGrayInput
                value={emailDomainValue}
                onChange={onChangeEmailDomain}
                $isError={isVerificationFailed}
                width="fluid"
              />
            ) : (
              <SelectBox
                setToSelfTypeMode={setToSelfTypeMode}
                initialOptions={[
                  '직접입력',
                  'naver.com',
                  'gmail.com',
                  'hanmail.net',
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
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onPressLoginButton();
            }
          }}
        />
        {isVerificationFailed && (
          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={false}>
              이메일과 비밀번호를 확인해주세요
            </StLabel1Text>
          </StLabelTextWrapper>
        )}
      </div>

      <StPaddingDiv>
        <StBottomWrapper>
          <Button
            label={'로그인'}
            $buttonTheme="blue"
            size="large"
            $bold
            onClick={onPressLoginButton}
            disabled={isReadyForLogin}
          />
          <StKakaoWrapper>{/* <KakaoLogin /> */}</StKakaoWrapper>

          <StTextWrapper>
            <StTextL1>아직 행동대장의 회원이 아니신가요?</StTextL1>
            <StTextL3 onClick={handleClickSignup}>회원가입</StTextL3>
          </StTextWrapper>
        </StBottomWrapper>
      </StPaddingDiv>
    </StWrapper>
  );
};
