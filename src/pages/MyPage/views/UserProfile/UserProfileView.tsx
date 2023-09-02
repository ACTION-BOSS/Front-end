import { ChangeEvent, FC, FormEvent } from 'react';
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
  StPasswordContent,
  StWarningText,
} from './UserProfileStyle';

type UserProfileViewProps = {
  originalEmail: string;
  originalPassword: string;
  originalNickname: string;
  nicknameValue: string;
  onChangeNickname: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  verification: boolean | null;
  text: string | null;
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
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          <StForm onSubmit={handleSubmit}>
            <div>
              <StInputBox
                type="text"
                value={nicknameValue}
                onChange={handleChangeInput}
                $isCorrect={verification}
              />
              {!verification && <StWarningText>{text}</StWarningText>}
            </div>
            <StButton>닉네임 변경</StButton>
          </StForm>
        </StContent>

        <StContent>
          <StSubTitleWrapper>이메일*</StSubTitleWrapper>
          <StForm onSubmit={handleSubmit}>
            <StInputBox
              type="text"
              value={originalNickname}
              onChange={() => {}}
            />
            <StButton>닉네임 변경</StButton>
          </StForm>
        </StContent>

        <StPasswordContent>
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
            <StForm onSubmit={handleSubmit}>
              <StInputBox
                type="text"
                value={originalNickname}
                onChange={() => {}}
              />
              <StButton>닉네임 변경</StButton>
            </StForm>
          </StContent>
        </StPasswordContent>
      </StContentWrapper>
    </StViewWrapper>
  );
};
