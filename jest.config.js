module.exports = {
  // verbose: true,
  roots: ['<rootDir>/src'],
  // moduleNameMapper: {
  //   '\\.(css|less|scss)$': 'identity-obj-proxy',
  //   '^src$': '<rootDir>/src/index.tsx',
  //   '^src(.*)$': '<rootDir>/src/$1',
  // },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
  // preset: 'ts-jest',
  coverageProvider: "v8",
  collectCoverage: true, // 统计覆盖率
  coverageDirectory: 'coverage', // 覆盖率结果输出的文件夹
  // coverageThreshold: {
  //   // 所有文件总的覆盖率要求
  //   global: {
  //     branches: 60,
  //     functions: 60,
  //     lines: 60,
  //     statements: 60,
  //   },
  //   // 匹配到的单个文件的覆盖率要求
  //   // 这里也支持通配符的配置
  //   './src/**/*.{ts,tsx}': {
  //     branches: 40,
  //     functions: 40,
  //     lines: 40,
  //     statements: 40,
  //   },
  // },
  // 匹配单测用例的文件
  // testMatch: ['<rootDir>/src/**/__tests__/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  // 当前环境是jsdom还是node
  testEnvironment: 'jsdom',
};
