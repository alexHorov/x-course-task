module.exports = {
  transform: {
    '^.+\\.svg$': '<rootDir>/transformers/svg.js',
    "^.+\\.jsx?$": "babel-jest",

  },
  moduleNameMapper: {
    ".(css|less|sass|scss|svg|png)$": "identity-obj-proxy",
    "./iconfont.css": "identity-obj-proxy",
  },
  collectCoverage: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
  "testEnvironment": "jsdom"
};