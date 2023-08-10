import { ChangeEvent, FC } from 'react';
import { Theme } from '../../../../styles';
import { Button } from '../../../Button';
import {
  StWrapper,
  StColumnDiv,
  StUpperSpaceDiv,
  StUpperText,
  StButtonWrapper,
  StFlexRowDiv,
  StAtText,
  StUpperDiv,
  StRelativeDiv,
  StVerificationInput,
  StTimerText,
  StVerificationButtonWrapper,
  StLabel1Text,
  StLabel3Text,
  StLabelTextWrapper,
} from './EmailPasswordStyle';
import { Input, SelectBox } from '../../components';
type EmailPasswordViewProps = {
  emailIdValue: string;
  onChangeEmailId: (...event: any[]) => void;
  emailDomainValue: string;
  onChangeEmailDomain: (...event: any[]) => void;
  isCodeSended: boolean;
  inputCode: string;
  onCodeSendButtonClick: () => void;
  handleInputChange: (e: string) => void;
  isInputFilled: boolean;
};

export const EmailPasswordView: FC<EmailPasswordViewProps> = ({
  emailIdValue,
  onChangeEmailId,
  emailDomainValue,
  onChangeEmailDomain,
  isCodeSended,
  onCodeSendButtonClick,
  inputCode,
  handleInputChange,
  isInputFilled,
}) => {
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
            />
          </StButtonWrapper>
        </StUpperSpaceDiv>
        <StFlexRowDiv>
          <Input
            value={emailIdValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onChangeEmailId(event.target.value);
            }}
            placeholder="선택해주세요"
          />
          <StAtText>@</StAtText>
          <SelectBox initialOptions={['직접입력', '2asdfasdf', '3asdfasdf']} />
          {/* <StGrayInput
            value={emailDomainValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onChangeEmailDomain(event.target.value);
            }}
          /> */}
        </StFlexRowDiv>
      </StColumnDiv>

      {isCodeSended && (
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
            />
            <StTimerText>02:22</StTimerText>
            <StVerificationButtonWrapper>
              {isInputFilled ? (
                <Button
                  label="인증하기"
                  $buttonTheme="emptyGray"
                  size="xsmall"
                  fontSize={Theme.fontSizes.label1}
                  fontWeight={Theme.fontWeights.label1}
                />
              ) : (
                <Button
                  label="인증하기"
                  $buttonTheme="gray"
                  size="xsmall"
                  fontSize={Theme.fontSizes.label1}
                  fontWeight={Theme.fontWeights.label1}
                />
              )}
            </StVerificationButtonWrapper>
          </StRelativeDiv>

          <StLabelTextWrapper>
            <StLabel1Text>이메일을 받지 못하셨나요?</StLabel1Text>
            <StLabel3Text>이메일 재전송</StLabel3Text>
          </StLabelTextWrapper>
        </StColumnDiv>
      )}
    </StWrapper>
  );
};
