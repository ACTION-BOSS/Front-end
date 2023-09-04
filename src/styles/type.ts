export type MediaType = {
  mobile: string;
  bigMobile: string;
  tablet: string;
};

export type ColorsType = {
  pink: string;
  blue: string;
  blueGray: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  white: string;
  black: string;
  deem: string;
};

export type FontSizesType = {
  h1: string;
  h2: string;
  h3: string;
  body1: string;
  body2: string;
  body3: string;
  body4: string;
  label1: string;
  label2: string;
  label3: string;
  mH1: string;
  mH2: string;
  mH3: string;
  mBody1: string;
  mBody2: string;
  mBody3: string;
  mL1: string;
};

export type FontWeightsType = {
  h1: string;
  h2: string;
  h3: string;
  body1: string;
  body2: string;
  body3: string;
  body4: string;
  label1: string;
  label2: string;
  label3: string;
  mH1: string;
  mH2: string;
  mH3: string;
  mBody1: string;
  mBody2: string;
  mBody3: string;
  mL1: string;
};

export interface ThemeType {
  media: MediaType;
  colors: ColorsType;
  fontSizes: FontSizesType;
  fontWeights: FontWeightsType;
  textDecoration: {
    label3: string;
  };
}
