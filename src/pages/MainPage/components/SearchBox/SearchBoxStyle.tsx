import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';
import { MagnifierIcon } from '../../../../assets';

export const SearchBox = styled.div`
  width: 435px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${media.tablet`
    width: 384px;`}
  ${media.mobile`
    width: 230px;`}
`;
export const SearchBoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background-color: ${Theme.colors.white};
  border-radius: 40px;
  gap: 10px;
  align-items: center;
  padding: 16px 24px;
  box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.25);
  ${media.mobile`
    height: 40px;
    padding: 10px 16px;`}
`;

export const Magnifier = styled(MagnifierIcon)`
  width: 24px;
  height: 24px;
  ${media.mobile`
    width: 20px;
    height: 20px;`}
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: ${Theme.colors.white};
  font-size: ${Theme.fontSizes.body1};
  font-weight: ${Theme.fontWeights.body1};
  outline: none;
  &::placeholder {
    color: ${Theme.colors.gray3};
  }
  ${media.mobile`
  font-size: ${Theme.fontSizes.mBody1};
  font-weight: ${Theme.fontWeights.mBody1};`}
`;

export const SearchBoxList = styled.div`
  background-color: ${Theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  padding: 0px 12px;
  box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
  width: 424px;
  max-height: 270px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    ${media.tablet`
    display: none;
    `}
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #848484;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #84848447;
    flex-wrap: nowrap;
  }
  ${media.tablet`
  width: 384px;`}
  ${media.mobile`
  width: 230px;`}
`;

export const SearchList = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};
  border-bottom: 1px solid ${Theme.colors.blueGray};
  cursor: pointer;
  ${media.mobile`
  font-size: ${Theme.fontSizes.mBody3};
  font-weight: ${Theme.fontWeights.mBody3};
  color: ${Theme.colors.gray8};`}
  span {
    color: ${Theme.colors.pink};
    
  }
`;
