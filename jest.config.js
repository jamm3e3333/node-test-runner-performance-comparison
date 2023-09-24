module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/jest'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/jest/**/*.test.ts'],
  globalSetup: '<rootDir>/jest/global-setup.ts',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  modulePaths: ['<rootDir>/jest/'],
}
