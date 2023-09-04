import { Theme } from '../../styles';

export const $buttonTheme = {
  pink: {
    backgroundColor: Theme.colors.pink,
    color: Theme.colors.white,
    border: '1px solid transparent',
    hover: {
      backgroundColor: '#ff478a',
    },
  },
  emptyBlue: {
    backgroundColor: Theme.colors.white,
    color: Theme.colors.blue,
    border: `2px solid ${Theme.colors.blue}`,
    hover: {
      backgroundColor: '#eaeffe',
    },
  },

  gray: {
    backgroundColor: Theme.colors.gray2,
    color: Theme.colors.white,
    border: '0px solid transparent',
    hover: {
      backgroundColor: Theme.colors.gray2,
    },
  },

  blueGray: {
    backgroundColor: Theme.colors.blueGray,
    color: Theme.colors.black,
    border: '0px solid transparent',
    hover: {
      backgroundColor: Theme.colors.gray2,
    },
  },

  blue: {
    backgroundColor: Theme.colors.blue,
    color: Theme.colors.white,
    border: '1px solid transparent',
    hover: {
      backgroundColor: '#789bfb',
    },
  },

  emptyGray: {
    backgroundColor: Theme.colors.white,
    color: Theme.colors.black,
    border: `0px solid transparent`,
    hover: {
      backgroundColor: '#efefef',
    },
  },

  emptyPink: {
    backgroundColor: Theme.colors.white,
    color: Theme.colors.pink,
    border: `2px solid ${Theme.colors.gray1}`,
    hover: {
      backgroundColor: '#efefef',
    },
  },

  empty: {
    backgroundColor: Theme.colors.white,
    color: Theme.colors.black,
    border: `0px solid transparent`,
    hover: {
      backgroundColor: '#efefef',
    },
  },
  gray3: {
    backgroundColor: Theme.colors.gray1,
    color: Theme.colors.gray3,
    border: `0px solid transparent`,
    hover: {
      backgroundColor: '#d8dade',
    },
  },
};
