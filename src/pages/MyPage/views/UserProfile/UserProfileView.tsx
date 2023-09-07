import { ChangeEvent, FC } from 'react';
import {
  StViewWrapper,
  StTitleWrapper,
  StTitleText,
  StyledFlagIcon,
  StContentWrapper,
  StContent,
  StSubTitleWrapper,
  StForm,
  StInputBox,
  StButton,
  StColumnContents,
  StWarningText,
  StGrayInput,
  StEmailIdInput,
  StEmailForm,
  StSelectBoxWrapper,
  StVerificationCodeInput,
  StColumnDiv,
  StLabelTextWrapper,
  StLabel1Text,
  StRelativeDiv,
  StVerificationButtonWrapper,
  StLabel3Text,
  StFlexEndDiv,
} from './UserProfileStyle';
import { SelectBox, Timer } from '../../../../modals';
import { DebouncedFunc } from 'lodash';

import { Button } from '../../../../shared';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isEmailFormatError,
  $isEmailSendFailed,
  $isNicknameChangeFinished,
  $isNicknameFocused,
  $isPasswordValid,
  $isResetCode,
  $isTimeOver,
} from '../../state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Theme } from '../../../../styles';
import { useWindowSize } from 'rooks';

type UserProfileViewProps = {
  originalEmail: string | null;
  originalNickname: string;
  nicknameValue: string;
  onChangeNickname: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  verification: boolean | null;
  validationLabelText: string | null;
  emailIdValue: string;
  onChangeEmailId: (...event: any[]) => void;
  emailDomainValue: string;
  onChangeEmailDomain: (...event: any[]) => void;
  isSelfTypeMode: boolean;
  setToSelfTypeMode: () => void;
  changeNickName: () => Promise<void>;
  changePassword: () => Promise<void>;
  onCodeSendButtonClick: DebouncedFunc<() => Promise<void>>;
  inputCode: string;
  handleInputChange: (e: string) => void;
  isInputFilled: boolean;
  reSendEmail: () => void;
  onEmailCodeAuthenticationButtonClick: () => void;
  passwordValue: string;
  onChangePassword: (...event: any[]) => void;
  passwordVerificationValue: string;
  onChangePasswordVerification: (...event: any[]) => void;
  handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVerified: boolean | null;
  isVerified: boolean | null;
  verificationInputErrorText: (isVerified: boolean | null) => string;
  handleDeleteButtonClick: () => void;
};

export const UserProfileView: FC<UserProfileViewProps> = ({
  originalEmail,
  originalNickname,
  nicknameValue,
  onChangeNickname,
  handleChangeInput,
  verification,
  validationLabelText,
  emailIdValue,
  onChangeEmailId,
  emailDomainValue,
  onChangeEmailDomain,
  isSelfTypeMode,
  setToSelfTypeMode,
  onCodeSendButtonClick,
  changeNickName,
  changePassword,
  inputCode,
  handleInputChange,
  isInputFilled,
  reSendEmail,
  onEmailCodeAuthenticationButtonClick,
  passwordValue,
  onChangePassword,
  passwordVerificationValue,
  onChangePasswordVerification,
  handleChangePassword,
  verificationInputErrorText,
  isPasswordVerified,
  isVerified,
  handleDeleteButtonClick,
}) => {
  const isCodeSent = useRecoilValue($isCodeSent);
  const isEmailCodeVerificated = useRecoilValue($isEmailCodeVerificated);
  const [isTimeOver, setIsTimeOver] = useRecoilState($isTimeOver);

  const [isResetCode, setIsResetCode] = useRecoilState($isResetCode);

  const isEmailSendFailed = useRecoilValue($isEmailSendFailed);
  const isEmailFormatError = useRecoilValue($isEmailFormatError);

  const [isNicknameFocused, setIsNicknameFocused] =
    useRecoilState($isNicknameFocused);
  const isNicknameChangeFinished = useRecoilValue($isNicknameChangeFinished);

  const isPasswordValid = useRecoilValue($isPasswordValid);

  const getTextByEmailCodeVerificated = (
    isEmailCodeVerificated: boolean | null,
  ) => {
    if (isEmailCodeVerificated === null) {
      return '이메일을 받지 못하셨나요?';
    }
    if (isEmailCodeVerificated === false) {
      return '인증코드가 다릅니다';
    }
    if (isEmailCodeVerificated) {
      return '인증이 완료되었습니다';
    }
  };

  const hasOriginalEmail = !!originalEmail;
  const isOriginalNickname = originalNickname === nicknameValue;
  const nicknameInputVerification = !isNicknameFocused
    ? null
    : isOriginalNickname
    ? null
    : verification;
  const nicknameChangeButtonDisabled =
    !isOriginalNickname && verification && isNicknameFocused;

  const { innerWidth } = useWindowSize();
  const isMobileView = innerWidth! < 576;

  const handleChangeEmailId = (e: ChangeEvent<HTMLInputElement>) => {
    const EMAILID_VERIFICATION_REGEX = /^[a-zA-Z0-9._\-+]*$/;
    if (!EMAILID_VERIFICATION_REGEX.test(e.target.value)) {
      return;
    }

    return onChangeEmailId(e.target.value);
  };

  const renderEmailSection = () => {
    if (!hasOriginalEmail) {
      return (
        <StEmailForm>
          <StEmailIdInput
            type="text"
            value={emailIdValue || ''}
            onChange={(e) => handleChangeEmailId(e)}
            $isError={isEmailSendFailed || isEmailFormatError}
          />
          <div>@</div>
          {isSelfTypeMode ? (
            <StGrayInput
              value={emailDomainValue || ''}
              onChange={onChangeEmailDomain}
              $isError={isEmailSendFailed || isEmailFormatError}
            />
          ) : (
            <StSelectBoxWrapper>
              <SelectBox
                setToSelfTypeMode={setToSelfTypeMode}
                initialOptions={[
                  '직접입력',
                  'naver.com',
                  'gmail.com',
                  'hanmail.net',
                ]}
                $isError={isEmailSendFailed || isEmailFormatError}
                myPage
              />
            </StSelectBoxWrapper>
          )}
        </StEmailForm>
      );
    } else {
      return (
        <StEmailForm>
          <StEmailIdInput
            type="text"
            value={emailIdValue || ''}
            onChange={onChangeEmailId}
            $isError={isEmailSendFailed || isEmailFormatError}
            disabled={true}
          />
          <div>@</div>

          <StGrayInput
            value={emailDomainValue || ''}
            onChange={onChangeEmailDomain}
            $isError={isEmailSendFailed || isEmailFormatError}
            disabled={true}
          />
        </StEmailForm>
      );
    }
  };

  return (
    <StViewWrapper>
      <StTitleWrapper>
        <StTitleText>개인정보 관리</StTitleText>
        <StyledFlagIcon />
      </StTitleWrapper>

      <StContentWrapper>
        <StContent>
          <StSubTitleWrapper>닉네임*</StSubTitleWrapper>
          <StForm>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <StInputBox
                type="text"
                value={nicknameValue || ''}
                onChange={handleChangeInput}
                $isCorrect={nicknameInputVerification}
                placeholder="닉네임을 입력해주세요"
                onFocus={() => setIsNicknameFocused(true)}
                width="fluid"
                disabled={isNicknameChangeFinished}
              />
              {!verification && isNicknameFocused && (
                <StWarningText $isCorrect={false}>
                  {isOriginalNickname ? '' : validationLabelText}
                </StWarningText>
              )}
              {nicknameInputVerification && (
                <StWarningText $isCorrect={true}>
                  {validationLabelText}
                </StWarningText>
              )}
            </div>
            <StButton
              $isCorrect={nicknameChangeButtonDisabled}
              onClick={verification ? changeNickName : undefined}
            >
              닉네임 변경
            </StButton>
          </StForm>
        </StContent>

        <StColumnContents>
          <StContent>
            <StSubTitleWrapper>이메일*</StSubTitleWrapper>
            <StForm>
              <StColumnDiv>
                {renderEmailSection()}

                {isEmailFormatError && (
                  <StLabelTextWrapper>
                    <StLabel1Text $isCorrect={false}>
                      잘못된 이메일 형식입니다
                    </StLabel1Text>
                  </StLabelTextWrapper>
                )}
                {isEmailSendFailed && (
                  <StLabelTextWrapper>
                    <StLabel1Text $isCorrect={false}>
                      이미 가입된 이메일입니다
                    </StLabel1Text>
                  </StLabelTextWrapper>
                )}
              </StColumnDiv>
              {!hasOriginalEmail && (
                <StButton
                  $isCorrect={!isCodeSent}
                  onClick={isCodeSent ? undefined : onCodeSendButtonClick}
                >
                  이메일 인증
                </StButton>
              )}
            </StForm>
          </StContent>
          {isCodeSent && (
            <div>
              <StRelativeDiv>
                <StSubTitleWrapper />
                <StVerificationCodeInput
                  placeholder="인증코드 6자리 입력"
                  value={inputCode}
                  onChange={(e) => {
                    handleInputChange(e.target.value);
                  }}
                  $isVerificated={isEmailCodeVerificated}
                />
                <Timer
                  initialTime={180}
                  startCondition={isCodeSent}
                  setIsTimeOver={setIsTimeOver}
                  isResetCode={isResetCode}
                  setIsResetCode={setIsResetCode}
                  pauseCondition={isEmailCodeVerificated}
                />
                <StVerificationButtonWrapper>
                  <Button
                    label="인증하기"
                    $buttonTheme="emptyGray"
                    size="xsmall"
                    fontSize={Theme.fontSizes.label1}
                    fontWeight={Theme.fontWeights.label1}
                    onClick={onEmailCodeAuthenticationButtonClick}
                    disabled={!isInputFilled || isTimeOver}
                  />
                </StVerificationButtonWrapper>
              </StRelativeDiv>
              <StRelativeDiv>
                <StSubTitleWrapper />
                <StLabelTextWrapper>
                  <StLabel1Text $isCorrect={isEmailCodeVerificated}>
                    {getTextByEmailCodeVerificated(isEmailCodeVerificated)}
                  </StLabel1Text>
                  <StLabel3Text onClick={reSendEmail}>
                    이메일 재전송
                  </StLabel3Text>
                </StLabelTextWrapper>
              </StRelativeDiv>
            </div>
          )}
        </StColumnContents>

        <StColumnContents>
          <StContent>
            <StSubTitleWrapper>비밀번호*</StSubTitleWrapper>
            <StForm>
              <div style={{ width: '100%', display: 'flex' }}>
                <StInputBox
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  value={passwordValue}
                  onChange={handleChangePassword}
                  $isCorrect={isPasswordVerified}
                  width="fluid"
                />
                {isPasswordVerified !== null && (
                  <StWarningText $isCorrect={isPasswordVerified}>
                    {isPasswordVerified
                      ? '사용가능한 비밀번호입니다'
                      : '8~15자 영어 + 숫자로만 입력 가능합니다. (특수문자 불가)'}
                  </StWarningText>
                )}
              </div>
              <StButton
                $isCorrect={isPasswordValid}
                onClick={undefined}
                style={{ opacity: 0 }}
                disabled={true}
              >
                비밀번호 변경
              </StButton>
            </StForm>
          </StContent>
          <StContent>
            <StSubTitleWrapper>비밀번호 확인*</StSubTitleWrapper>
            <StForm>
              <div style={{ width: '100%', display: 'flex' }}>
                <StInputBox
                  placeholder="비밀번호를 확인해주세요"
                  type="password"
                  value={passwordVerificationValue}
                  onChange={onChangePasswordVerification}
                  $isCorrect={isVerified}
                  width="fluid"
                />
                {isVerified !== null && (
                  <StWarningText $isCorrect={isVerified}>
                    {verificationInputErrorText(isVerified)}
                  </StWarningText>
                )}
              </div>
              <StButton
                $isCorrect={isPasswordValid}
                onClick={isPasswordValid ? changePassword : undefined}
              >
                비밀번호 변경
              </StButton>
            </StForm>
          </StContent>
        </StColumnContents>
      </StContentWrapper>

      <StFlexEndDiv>
        <div onClick={handleDeleteButtonClick}>
          {isMobileView ? (
            <p>회원 탈퇴</p>
          ) : (
            <Button label="회원 탈퇴" $buttonTheme="gray3" size="large" />
          )}
        </div>
      </StFlexEndDiv>
    </StViewWrapper>
  );
};
