import { FC } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { $chosenIndex } from '../state';
import { Theme, media } from '../../../styles';
type NavbarProps = {};

export const Navbar: FC<NavbarProps> = ({}) => {
  const [chosenIndex, setChosenIndex] = useRecoilState($chosenIndex);
  const NavbarMenus = [
    '개인정보 관리',
    '내가 쓴 글',
    '작성한 댓글',
    '나도 불편해요',
  ];

  const handleClickIndex = (i: number) => {
    setChosenIndex(i);
  };

  const isChosen = (i: number) => {
    return i === chosenIndex;
  };

  return (
    <StNavbarWrapper>
      {NavbarMenus.map((e, i) => {
        return (
          <StMenuWrapper
            key={i}
            onClick={() => handleClickIndex(i)}
            $isChosen={isChosen(i)}
          >
            {e}
          </StMenuWrapper>
        );
      })}
    </StNavbarWrapper>
  );
};

export const StNavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 204px;
  gap: 27px;
  padding: 0px 12px;

  ${media.tablet`
  flex-direction: row;
  width: 100%;
  gap: 45px;
  `}
  ${media.mobile`
  gap: 5px;
  `}
`;

export const StMenuWrapper = styled.div<{ $isChosen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  cursor: pointer;

  background-color: ${({ $isChosen }) =>
    $isChosen ? Theme.colors.white : 'transparent'};

  color: ${({ $isChosen }) =>
    $isChosen ? Theme.colors.blue : Theme.colors.gray5};
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: ${({ $isChosen }) =>
    $isChosen ? Theme.fontWeights.h2 : Theme.fontWeights.body1};
  line-height: normal;
  ${media.mobile`
    font-size:${Theme.fontSizes.mBody1};
    font-weight:${Theme.fontWeights.mBody1};
    height: 40px;
  `}
  ${({ $isChosen }) =>
    $isChosen &&
    media.mobile`
    font-size:${Theme.fontSizes.mH3};
    font-weight:${Theme.fontWeights.mH3};
  `};
`;
