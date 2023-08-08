// step들이 들어감
// step에 따라 view를 갈아끼워넣기

import { atom } from 'recoil';
import { EStep } from './type';

export const $stepIndex = atom<EStep>({
  key: 'stepIndex',
  default: EStep.STEP1,
});
