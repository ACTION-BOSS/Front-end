import { ButtonHTMLAttributes } from 'react';
import { styled, css, DefaultTheme } from 'styled-components';

interface IButtonStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $buttonTheme: keyof typeof $buttonTheme;
  theme: Mytheme;
  size: string;
  $bold?: boolean;
}

interface Mytheme extends DefaultTheme {
  filled: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };

  empty: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };

  gray: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };
}

const $buttonTheme = {
  filled: {
    backgroundColor: '#FF005E',
    color: '#fff',
    border: '1px solid transparent',
    hover: {
      backgroundColor: '#ff478a',
    },
  },
  empty: {
    backgroundColor: '#fff',
    color: 'black',
    border: '1px solid rgba(0, 0, 0, 0.25)',
    hover: {
      backgroundColor: '#ececec',
    },
  },

  gray: {
    backgroundColor: '#D9D9D9',
    color: '#A2A2A2',
    border: '1px solid transparent',
    hover: {
      backgroundColor: '#dfdfdf',
    },
  },
};

export const ButtonStyle = styled.button<IButtonStyleProps>`
  display: flex;
  flex: 1;
  text-decoration: none;
  justify-content: center;
  transition:
    color 0.1s,
    background-color 0.1s,
    border-color 0.1s;
  cursor: pointer;
  align-items: center;
  padding-top: ${(props) => (props.size === 'large' ? '22.25px' : '15.75px')};
  padding-bottom: ${(props) =>
    props.size === 'large' ? '22.25px' : '15.75px'};
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  border: 1px solid transparent;
  font: inherit;
  border-radius: 11px;
  background-color: ${(props) =>
    $buttonTheme[props.$buttonTheme].backgroundColor};
  color: ${(props) => $buttonTheme[props.$buttonTheme].color};
  font-size: ${(props) => (props.size === 'large' ? '18px' : '14px')};
  font-weight: ${(props) => (props.$bold ? '600' : '400')};
  border: ${(props) => $buttonTheme[props.$buttonTheme].border};
  ${(props) => css`
    &:hover,
    &:active {
      background-color: ${$buttonTheme[props.$buttonTheme].hover
        .backgroundColor};
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
`;
