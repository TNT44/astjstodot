module.exports = {
  "env": {
    "commonjs": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": false
    },
    "ecmaVersion": 6
  },
  "rules": {
    "indent": [
      "off"
    ],
    "linebreak-style": [
      "off",
      "windows"
    ],
    "quotes": [
      "off",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": "off"
  }
};