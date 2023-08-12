import { ChangeEvent, FC } from 'react';
import { Input } from '../../components';
import {
  StWrapper,
  StColumnDiv,
  StUpperSpaceDiv,
  StUpperText,
  StLabelTextWrapper,
  StLabel1Text,
} from '../EmailPassword/EmailPasswordStyle';
type PasswordVerificationViewProps = {};

export const PasswordVerificationView: FC<
  PasswordVerificationViewProps
> = ({}) => {
  return (
    <StWrapper>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>이메일 인증</StUpperText>
        </StUpperSpaceDiv>

        <Input
          value={''}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {}}
          placeholder="example"
          $isError={false}
          width="fluid"
        />

        {true && (
          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={false}>
              잘못된 이메일 형식입니다
            </StLabel1Text>
          </StLabelTextWrapper>
        )}
      </StColumnDiv>
    </StWrapper>
  );
};
