module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/tests/e2e/", "/src/store/"],
  collectCoverage: true,
};
