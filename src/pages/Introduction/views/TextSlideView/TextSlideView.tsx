import { FlowText, FlowWrap, LogoSymbol } from './style';
import { LOGO_SYMBOL } from '../../../../assets';

export const TextSlideView = () => {
  const text = `행복한 동네를 위한 대화의 장소 `;

  const texts = new Array(6).fill(text);

  return (
    <FlowText>
      {texts.map((item, index) => (
        <FlowWrap key={index}>
          {item}
          <LogoSymbol src={LOGO_SYMBOL} alt="Logo" />
        </FlowWrap>
      ))}
    </FlowText>
  );
};
