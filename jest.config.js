module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.test.{js,jsx,ts,tsx}',
    '!app/app.tsx',
    '!app/*/*/Loadable.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 68,
      branches: 61,
      functions: 68,
      lines: 68,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],
  testRegex: 'tests/.*\\.test\\.(js|ts(x?))$',
  transform: {
    '^.+\\.(ts(x?)|js)$': 'ts-jest',
  },
  snapshotSerializers: [],
  testResultsProcessor: 'jest-sonar-reporter',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
