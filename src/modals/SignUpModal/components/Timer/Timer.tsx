import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
import { useTimer } from 'use-timer';

type TimerProps = {
  initialTime: number;
  startCondition: boolean;
  setIsTimeOver: (isTimeOver: boolean) => void;
  isResetCode: boolean;
  setIsResetCode: (reset: boolean) => void;
  pauseCondition: boolean | null;
};

export const Timer: FC<TimerProps> = ({
  initialTime,
  startCondition,
  setIsTimeOver,
  isResetCode,
  setIsResetCode,
  pauseCondition,
}) => {
  useEffect(() => {
    if (isResetCode) {
      reset();
      start();
      setIsTimeOver(false);
    }
    setIsResetCode(false);
  }, [isResetCode]);

  useEffect(() => {
    if (pauseCondition) {
      pause();
    }
  }, [pauseCondition]);

  const { time, start, reset, pause } = useTimer({
    timerType: 'DECREMENTAL',
    initialTime,
    step: 1,
    endTime: 0,
    autostart: startCondition,
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
