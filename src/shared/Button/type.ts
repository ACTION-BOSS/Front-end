import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';
import { $buttonTheme } from './buttonTheme';

export type ThemeType =
  | 'pink'
  | 'emptyBlue'
  | 'gray'
  | 'blueGray'
  | 'blue'
  | 'emptyGray'
  | 'emptyPink'
  | 'empty'
  | 'gray3';

export type SizeType = 'large' | 'medium' | 'mediumLong' | 'small' | 'xsmall';

export interface ButtonStyleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $buttonTheme: keyof typeof $buttonTheme;
  theme: Mytheme;
  size: SizeType;
  $bold?: boolean;
  fontSize?: string;
  fontWeight?: string;
}

export interface Mytheme extends DefaultTheme {
  pink: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };

  emptyBlue: {
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

  blueGray: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };

  blue: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };

  emptyGray: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };

  emptyPink: {
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

  gray3: {
    backgroundColor: string;
    color: string;
    border: string;
    hover: {
      backgroundColor: string;
    };
  };
}
