import { FC, useEffect } from 'react';

import { useSetRecoilState } from 'recoil';
import { $isReadyForSignup } from '../../state';
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
  onChangeNickname: (...event: any[]) => void;
};

export const NicknameView: FC<NicknameViewProps> = ({
  nicknameValue,
  onChangeNickname,
}) => {
  const setIsReadyForSignup = useSetRecoilState($isReadyForSignup);

  // TODO : debounce Nickname duplication check
  const isVerified = true;

  useEffect(() => {
    if (isVerified !== null) {
      setIsReadyForSignup(isVerified);
    }
  }, [isVerified]);

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
            onChange={onChangeNickname}
            $isVerificated={isVerified}
          />
        </StInputWrapper>

        {isVerified !== null && (
          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={isVerified}>
              {isVerified
                ? '사용 가능한 닉네임입니다'
                : '이미 존재하는 닉네임입니다'}
            </StLabel1Text>
          </StLabelTextWrapper>
        )}
      </StColumnDiv>
    </StWrapper>
  );
};
