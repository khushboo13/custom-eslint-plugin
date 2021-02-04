# custom-eslint-plugin

Custom eslint plugin to throw error when number of lines in a arrow function is more than ten.

# How to add in your local project

1. Clone the repository in your local
2. npm i
3. npm add - dev file:./${path where you cloned the repo}
4. In your eslintrc, add following

{
  "plugins": ["arrow-functions-body-length"], 
  "rules": {
    "arrow-functions-body-length/no-lengthy-arrow-functions": 1
  }
}

arrow-functions-body-length - plugin name defined in package.json
no-lengthy-arrow-functions - rule name as defined in index.js
