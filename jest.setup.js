// Mock react-native modules
jest.mock('react-native', () => ({
  StyleSheet: {
    create: (styles) => styles,
  },
  View: 'View',
  Text: 'Text',
}));
