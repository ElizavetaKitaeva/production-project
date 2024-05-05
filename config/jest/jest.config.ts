import path from "path";

export default {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "C:\\Users\\tim\\AppData\\Local\\Temp\\jest",

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.(s?css)$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },
};
