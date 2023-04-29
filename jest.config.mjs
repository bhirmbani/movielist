// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*.{js,jsx}"],
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
//   transform: {},
//   // transform: {
//   //   "\\.[jt]sx?$": "babel-jest",
//   // },
//   // transformIgnorePatterns: [
//   //   '<rootDir>/node_modules/(?!(@testing-library/jest-dom)/)'
//   // ]
//   // transformIgnorePatterns: [
//   //   '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
//   //   '^.+\\.module\\.(css|sass|scss)$',
//   // ],
//   // moduleDirectories: ["node_modules", "src"],
// };

// jest.config.mjs
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)