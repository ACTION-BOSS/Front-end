import { ChangeEvent, FC, useEffect, useState } from 'react';
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
import { api } from '../../../../api';
import { AxiosError } from 'axios';

type NicknameViewProps = {
  nicknameValue: string;
  onChangeNickname: (...event: any[]) => void;
};

export const NicknameView: FC<NicknameViewProps> = ({
  nicknameValue,
  onChangeNickname,
}) => {
  const setIsReadyForSignup = useSetRecoilState($isReadyForSignup);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState<
    boolean | null
  >(null);

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

  useEffect(() => {
    const checkNicknameDuplicated = async () => {
      try {
        const response = await api.post('auth/signup/nicknameCheck', {
          nickname: nicknameValue,
        });

        console.log(response);

        if (response.status === 200) {
          setIsDuplicatedNickname(false);
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        console.log('err', AxiosError);

        if (
          AxiosError.response?.status === 401 ||
          AxiosError.response?.status === 403
        ) {
          setIsDuplicatedNickname(true);
        }
      }
    };

    checkNicknameDuplicated();
  }, [nicknameValue]);

  useEffect(() => {
    setIsReadyForSignup(verification);
  }, [verification]);

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
