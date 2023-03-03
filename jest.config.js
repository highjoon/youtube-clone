/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/*.test.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/__mocks__/**',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$': `<rootDir>/__mocks__/fileMock.js`,
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  verbose: true,
  testTimeout: 30000,
  snapshotSerializers: ['@emotion/jest/serializer'],
};
