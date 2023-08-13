import { ChangeEvent, FC, useEffect } from 'react';

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

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) return;
    onChangeNickname(e);
  };

  const validationCheck = (nickname: string) => {
    if (nickname.length === 0) {
      return {
        verification: null,
        text: null,
      };
    }

    if (nickname.length < 2 || nickname.length > 15) {
      return {
        verification: false,
        text: '2글자 이상 15글자 이하의 닉네임만 가능합니다',
      };
    } else {
      // TODO : duplicate check axios
      const isDuplicatedNickname = false;

      if (isDuplicatedNickname) {
        return {
          verification: false,
          text: '이미 존재하는 닉네임입니다',
        };
      } else {
        return {
          verification: true,
          text: '사용 가능한 닉네임입니다',
        };
      }
    }
  };

  const { verification, text } = validationCheck(nicknameValue);

  const isNicknameLengthValid =
    nicknameValue.length >= 2 && nicknameValue.length <= 15;

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
