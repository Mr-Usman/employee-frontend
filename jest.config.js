module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|jsx|ts|js)?$",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js"
};
