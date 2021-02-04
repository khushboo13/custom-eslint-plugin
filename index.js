module.exports = {
  rules: {
    "no-lengthy-arrow-functions": {    
      create: function(context) {
        return {
          ArrowFunctionExpression(node) {
            if(node.loc.end.line - node.loc.start.line > 10) {
              context.report({
                node,
                message: 'Cannot have arrow functions greater than 10 lines.'
              })
            }
          }
        }
      }
    }
  }
};
