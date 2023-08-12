import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useTimer } from 'use-timer';
import { $isCodeSent, $isResetCode, $isTimeOver } from '../../state';

type TimerProps = {
  initialTime: number;
};

export const Timer: FC<TimerProps> = ({ initialTime }) => {
  const isCodeSent = useRecoilValue($isCodeSent);
  const [isResetCode, setIsResetCode] = useRecoilState($isResetCode);
  const setIsTimeOver = useSetRecoilState($isTimeOver);

  useEffect(() => {
    if (isResetCode) {
      reset();
      start();
      setIsTimeOver(false);
    }
    setIsResetCode(false);
  }, [isResetCode]);

  const { time, start, reset } = useTimer({
    timerType: 'DECREMENTAL',
    initialTime: 13,
    step: 1,
    endTime: 0,
    autostart: isCodeSent,
    onTimeOver: () => {
      setIsTimeOver(true);
    },
  });

  const minute = Math.floor(time / 60);
  const seconds = time % 60;

  const MINUTE_TEXT = minute < 10 ? '0' + minute : minute;
  const SECONDS_TEXT = seconds < 10 ? '0' + seconds : seconds;

  return (
    <StTimerText time={time}>{`${MINUTE_TEXT}:${SECONDS_TEXT}`}</StTimerText>
  );
};

export const StTimerText = styled.div<{ time: number }>`
  right: 80px;
  position: absolute;
  text-align: center;
  color: ${Theme.colors.gray6};
  font-size: ${Theme.fontSizes.label2};
  font-weight: ${Theme.fontWeights.label2};
`;
