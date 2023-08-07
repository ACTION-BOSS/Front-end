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
    backgroundColor: Theme.colors.gray,
    color: Theme.colors.black,
    border: '1px solid transparent',
    hover: {
      backgroundColor: '#dfdfdf',
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
    border: `2px solid ${Theme.colors.gray}`,
    hover: {
      backgroundColor: '#efefef',
    },
  },

  emptyPink: {
    backgroundColor: Theme.colors.white,
    color: Theme.colors.pink,
    border: `2px solid ${Theme.colors.gray}`,
    hover: {
      backgroundColor: '#efefef',
    },
  },
};
