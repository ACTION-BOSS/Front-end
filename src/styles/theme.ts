interface ThemeProps {
  colors: {
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
  };
  fontSizes: {
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
  };
  fontWeights: {
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
  };
  textDecoration: {
    label3: string;
  };
}

export const Theme: ThemeProps = {
  colors: {
    pink: '#FF005E',
    blue: '#5782FA',
    blueGray: '#F0F1F5',
    gray1: '#E0E3EB',
    gray2: '#C2C8D6',
    gray3: '#A3ACC2',
    gray4: '#8A8FA8',
    gray5: '#73738C',
    gray6: '#5C5C70',
    gray7: '#454554',
    gray8: '#292F3D',
    white: '#FEFEFE',
    black: '#14171F',
  },
  fontSizes: {
    h1: '25px',
    h2: '18px',
    h3: '15px',
    body1: '18px',
    body2: '15px',
    body3: '13px',
    body4: '15px',
    label1: '12px',
    label2: '10px',
    label3: '12px',
  },
  fontWeights: {
    h1: '600',
    h2: '700',
    h3: '600',
    body1: '500',
    body2: '500',
    body3: '500',
    body4: '300',
    label1: '300',
    label2: '300',
    label3: '500',
  },
  textDecoration: {
    label3: 'underline',
  },
};
