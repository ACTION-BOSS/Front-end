import { FlowText, FlowWrap } from './style';

export const TextSlideView = () => {
  const text = `행복한 동네를 위한 대화의 장소 `;
  return (
    <FlowText>
      <FlowWrap>{text}</FlowWrap>
      <FlowWrap>{text}</FlowWrap>
      <FlowWrap>{text}</FlowWrap>
      <FlowWrap>{text}</FlowWrap>
    </FlowText>
  );
};
