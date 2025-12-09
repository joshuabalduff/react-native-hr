module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  collectCoverage: false,
};
