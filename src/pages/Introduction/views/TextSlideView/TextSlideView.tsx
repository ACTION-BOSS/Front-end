import { FlowText, FlowWrap } from './style';

export const TextSlideView = () => {
  const text = `행복한 동네를 위한 대화의 장소 `;

  const texts = new Array(4).fill(text);

  return (
    <FlowText>
      {texts.map((item, index) => (
        <FlowWrap key={index}>{item}</FlowWrap>
      ))}
    </FlowText>
  );
};
