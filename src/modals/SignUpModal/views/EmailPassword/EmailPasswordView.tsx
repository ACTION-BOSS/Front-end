import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Theme } from '../../../../styles';
import { SelectBox, Timer } from '../../components';
import { Button } from '../../../../shared';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isEmailFormatError,
  $isEmailSendFailed,
  $isResetCode,
  $isTimeOver,
} from '../../state';
import {
  StWrapper,
  StColumnDiv,
  StUpperSpaceDiv,
  StUpperText,
  StButtonWrapper,
  StFlexRowDiv,
  StGrayInput,
  StAtText,
  StLabelTextWrapper,
  StLabel1Text,
  StUpperDiv,
  StRelativeDiv,
  StVerificationInput,
  StVerificationButtonWrapper,
  StLabel3Text,
  StAtWrapper,
  StFlexDiv,
} from '../style';

type EmailPasswordViewProps = {
  emailIdValue: string;
  onChangeEmailId: (...event: any[]) => void;
  emailDomainValue: string;
  onChangeEmailDomain: (...event: any[]) => void;
  inputCode: string;
  onCodeSendButtonClick: () => void;
  handleInputChange: (e: string) => void;
  isInputFilled: boolean;
  isSelfTypeMode: boolean;
  setToSelfTypeMode: () => void;
  reSendEmail: () => void;
  onEmailCodeAuthenticationButtonClick: () => void;
};

export const EmailPasswordView: FC<EmailPasswordViewProps> = ({
  emailIdValue,
  onChangeEmailId,
  emailDomainValue,
  onChangeEmailDomain,
  onCodeSendButtonClick,
  inputCode,
  handleInputChange,
  isInputFilled,
  isSelfTypeMode,
  setToSelfTypeMode,
  reSendEmail,
  onEmailCodeAuthenticationButtonClick,
}) => {
  const isCodeSent = useRecoilValue($isCodeSent);
  const isEmailSendFailed = useRecoilValue($isEmailSendFailed);
  const isEmailFormatError = useRecoilValue($isEmailFormatError);
  const isEmailCodeVerificated = useRecoilValue($isEmailCodeVerificated);
  const [isTimeOver, setIsTimeOver] = useRecoilState($isTimeOver);
  const [isResetCode, setIsResetCode] = useRecoilState($isResetCode);

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

  return (
    <StWrapper>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>이메일 인증</StUpperText>
          <StButtonWrapper>
            <Button
              label="인증코드 보내기"
              $buttonTheme="emptyGray"
              size="xsmall"
              fontSize={Theme.fontSizes.label1}
              fontWeight={Theme.fontWeights.label1}
              onClick={onCodeSendButtonClick}
              disabled={isCodeSent}
            />
          </StButtonWrapper>
        </StUpperSpaceDiv>
        <StFlexRowDiv>
          <StFlexDiv>
            <StGrayInput
              value={emailIdValue}
              onChange={onChangeEmailId}
              placeholder="example"
              $isError={isEmailSendFailed || isEmailFormatError}
              width="fluid"
            />
          </StFlexDiv>

          <StAtWrapper>
            <StAtText>@</StAtText>
          </StAtWrapper>

          <StFlexDiv>
            {isSelfTypeMode ? (
              <StGrayInput
                value={emailDomainValue}
                onChange={onChangeEmailDomain}
                $isError={isEmailSendFailed || isEmailFormatError}
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
                $isError={isEmailSendFailed || isEmailFormatError}
              />
            )}
          </StFlexDiv>
        </StFlexRowDiv>
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

      {isCodeSent && (
        <StColumnDiv>
          <StUpperDiv>
            <StUpperText>이메일로 전송된 인증코드를 입력해주세요</StUpperText>
          </StUpperDiv>
          <StRelativeDiv>
            <StVerificationInput
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

          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={isEmailCodeVerificated}>
              {getTextByEmailCodeVerificated(isEmailCodeVerificated)}
            </StLabel1Text>
            <StLabel3Text onClick={reSendEmail}>이메일 재전송</StLabel3Text>
          </StLabelTextWrapper>
        </StColumnDiv>
      )}
    </StWrapper>
  );
};
