import { ChangeEvent, FC } from 'react';
import {
  StColumnDiv,
  StInputWrapper,
  StLabel1Text,
  StLabelTextWrapper,
  StUpperSpaceDiv,
  StUpperText,
  StVerificationInput,
  StWrapper,
} from '../style';

type NicknameViewProps = {
  nicknameValue: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  verification: boolean | null;
  text: string | null;
};

export const NicknameView: FC<NicknameViewProps> = ({
  nicknameValue,
  handleChangeInput,
  verification,
  text,
}) => {
  return (
    <StWrapper>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>닉네임 설정</StUpperText>
        </StUpperSpaceDiv>

        <StInputWrapper>
          <StVerificationInput
            placeholder="닉네임을 입력해주세요"
            value={nicknameValue}
            onChange={handleChangeInput}
            $isVerificated={verification}
          />
        </StInputWrapper>

        {verification !== null && (
          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={verification}>{text}</StLabel1Text>
          </StLabelTextWrapper>
        )}
      </StColumnDiv>
    </StWrapper>
  );
};
