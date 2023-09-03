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
} from './UserProfileStyle';
import { SelectBox, Timer } from '../../../../modals';
import { DebouncedFunc } from 'lodash';

import { Button } from '../../../../shared';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isEmailFormatError,
  $isEmailSendFailed,
  $isResetCode,
  $isTimeOver,
} from '../../state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Theme } from '../../../../styles';
import {
  StColumnDiv,
  StLabel1Text,
  StLabel3Text,
  StLabelTextWrapper,
  StRelativeDiv,
  StVerificationButtonWrapper,
} from '../../../../modals/SignUpModal/views/style';

type UserProfileViewProps = {
  originalEmail: string | null;
  originalPassword: string;
  originalNickname: string;
  nicknameValue: string;
  onChangeNickname: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  verification: boolean | null;
  text: string | null;
  emailIdValue: string;
  onChangeEmailId: (...event: any[]) => void;
  emailDomainValue: string;
  onChangeEmailDomain: (...event: any[]) => void;
  isSelfTypeMode: boolean;
  setToSelfTypeMode: () => void;
  isVerificationFailed: boolean;
  changeNickName: () => Promise<void>;
  onCodeSendButtonClick: DebouncedFunc<() => Promise<void>>;
  inputCode: string;
  handleInputChange: (e: string) => void;
  isInputFilled: boolean;
  reSendEmail: () => void;
  onEmailCodeAuthenticationButtonClick: () => void;
};

export const UserProfileView: FC<UserProfileViewProps> = ({
  originalEmail,
  originalNickname,
  originalPassword,
  nicknameValue,
  onChangeNickname,
  handleChangeInput,
  verification,
  text,
  emailIdValue,
  onChangeEmailId,
  emailDomainValue,
  onChangeEmailDomain,
  isSelfTypeMode,
  setToSelfTypeMode,
  isVerificationFailed,
  onCodeSendButtonClick,
  changeNickName,
  inputCode,
  handleInputChange,
  isInputFilled,
  reSendEmail,
  onEmailCodeAuthenticationButtonClick,
}) => {
  const isCodeSent = useRecoilValue($isCodeSent);
  const isEmailCodeVerificated = useRecoilValue($isEmailCodeVerificated);
  const [isTimeOver, setIsTimeOver] = useRecoilState($isTimeOver);

  const [isResetCode, setIsResetCode] = useRecoilState($isResetCode);

  const isEmailSendFailed = useRecoilValue($isEmailSendFailed);
  const isEmailFormatError = useRecoilValue($isEmailFormatError);

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

  const hasOrignialEmail = !!originalEmail;

  const renderEmailSection = () => {
    if (!hasOrignialEmail) {
      return (
        <StEmailForm>
          <StEmailIdInput
            type="text"
            value={emailIdValue}
            onChange={onChangeEmailId}
            $isError={isEmailSendFailed || isEmailFormatError}
          />
          <div>@</div>
          {isSelfTypeMode ? (
            <StGrayInput
              value={emailDomainValue}
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
            value={emailIdValue}
            onChange={onChangeEmailId}
            $isError={isEmailSendFailed || isEmailFormatError}
            disabled={true}
          />
          <div>@</div>

          <StGrayInput
            value={emailDomainValue}
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
            <div>
              <StInputBox
                type="text"
                value={nicknameValue}
                onChange={handleChangeInput}
                $isCorrect={verification}
                placeholder="닉네임을 입력해주세요"
                width="fluid"
              />
              {!verification && <StWarningText>{text}</StWarningText>}
            </div>
            <StButton
              $isCorrect={verification}
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
              {!hasOrignialEmail && (
                <StButton $isCorrect={true} onClick={onCodeSendButtonClick}>
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
            <StInputBox
              type="text"
              value={originalNickname}
              onChange={() => {}}
            />
          </StContent>
          <StContent>
            <StSubTitleWrapper>비밀번호 확인*</StSubTitleWrapper>
            <StForm>
              <StInputBox
                type="text"
                value={originalNickname}
                onChange={() => {}}
              />
              <StButton>닉네임 변경</StButton>
            </StForm>
          </StContent>
        </StColumnContents>
      </StContentWrapper>
    </StViewWrapper>
  );
};
